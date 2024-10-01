import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Home() {
  const [transactionType, setTransactionType] = useState("");
  const [financialData, setFinancialData] = useState({
    revenue: null,
    expense: null,
  });

  const monthlyData = {
    JAN: { revenue: 5000, expense: 3000 },
    FEB: { revenue: 6000, expense: 3500 },
    MAR: { revenue: 4500, expense: 2500 },
    APR: { revenue: 7000, expense: 4000 },
    MAY: { revenue: 8000, expense: 4500 },
    JUN: { revenue: 7500, expense: 3800 },
    JUL: { revenue: 9000, expense: 5000 },
    AUG: { revenue: 8500, expense: 4800 },
    SEP: { revenue: 9200, expense: 5300 },
    OCT: { revenue: 9400, expense: 5600 },
    NOV: { revenue: 10000, expense: 6000 },
    DEC: { revenue: 11000, expense: 6500 },
  };

  const handleMonthChange = (e) => {
    const selectedMonth = e.target.value;
    setTransactionType(selectedMonth);

    // Verifica se o mês foi selecionado e define os dados correspondentes
    if (selectedMonth) {
      setFinancialData(monthlyData[selectedMonth]);
    } else {
      setFinancialData({ revenue: null, expense: null });
    }
  };

  useEffect(() => {
    const currentMonthIndex = new Date().getMonth(); // 0 = Janeiro, 11 = Dezembro
    const monthNames = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];
    const currentMonth = monthNames[currentMonthIndex];

    // Define o mês atual como valor padrão
    setTransactionType(currentMonth);
    setFinancialData(monthlyData[currentMonth]);
  }, []);

  const balance = financialData.revenue - financialData.expense;

  const chartData = {
    labels: Object.keys(monthlyData), // Mêses
    datasets: [
      {
        label: "Receita",
        data: Object.values(monthlyData).map((data) => data.revenue),
        backgroundColor: "rgba(75, 192, 192, 0.7)",
      },
      {
        label: "Despesa",
        data: Object.values(monthlyData).map((data) => data.expense),
        backgroundColor: "rgba(255, 99, 132, 0.7)",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Resumo de Receita e Despesas Anual",
      },
    },
  };

  return (
    <div className="p-6 min-h-screen">
      <div className="mb-6 max-w-4xl mx-auto">
        <Bar data={chartData} options={chartOptions} />
      </div>
      <div className="text-gray-700 flex flex-col space-y-2">
        <label className="font-semibold text-lg text-indigo-600">
          Escolha um mês de Análise
        </label>
        <div>
          <select
            className="h-12 w-full pl-4 pr-8 bg-white border border-indigo-300 rounded-lg shadow-md text-gray-800 focus:ring-indigo-500 focus:border-indigo-500 transition ease-in-out duration-200"
            value={transactionType}
            onChange={handleMonthChange}
            required
          >
            <option value="">Select a month</option>
            <option value="JAN">JANUARY</option>
            <option value="FEB">FEBRUARY</option>
            <option value="MAR">MARCH</option>
            <option value="APR">APRIL</option>
            <option value="MAY">MAY</option>
            <option value="JUN">JUNE</option>
            <option value="JUL">JULY</option>
            <option value="AUG">AUGUST</option>
            <option value="SEP">SEPTEMBER</option>
            <option value="OCT">OCTOBER</option>
            <option value="NOV">NOVEMBER</option>
            <option value="DEC">DECEMBER</option>
          </select>
        </div>
        {transactionType && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Box de Receita */}
            <div className="bg-green-100 p-4 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold text-green-700">Receita</h3>
              <p className="text-xl font-bold text-green-800 mt-2">
                R$ {financialData.revenue?.toLocaleString() || "-"}
              </p>
            </div>

            {/* Box de Despesa */}
            <div className="bg-red-100 p-4 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold text-red-700">Despesa</h3>
              <p className="text-xl font-bold text-red-800 mt-2">
                R$ {financialData.expense?.toLocaleString() || "-"}
              </p>
            </div>

            {/* Box de Saldo (Receita - Despesa) */}
            <div
              className={`p-4 rounded-lg shadow-md text-center ${
                balance >= 0 ? "bg-blue-100" : "bg-yellow-100"
              }`}
            >
              <h3
                className={`text-lg font-semibold ${
                  balance >= 0 ? "text-blue-700" : "text-yellow-700"
                }`}
              >
                Saldo
              </h3>
              <p
                className={`text-xl font-bold mt-2 ${
                  balance >= 0 ? "text-blue-800" : "text-yellow-800"
                }`}
              >
                R$ {balance?.toLocaleString() || "-"}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
