import { useEffect } from "react";
import { FaArrowUp, FaArrowDown, FaWallet } from "react-icons/fa";

export default function Home() {
  useEffect(() => {}, []);

  return (
    <div className="p-6 min-h-screen">
      <div className="flex justify-between items-center">
        <div className="text-gray-700 flex">
          <button className="mr-4 p-2 border rounded-md">Visão Geral</button>
          <button className="p-2 border rounded-md">Detalhamento</button>
        </div>
        <div className="flex gap-4">
          <label className="text-gray-700 font-semibold flex   gap-5 items-center">
            Mês:
            <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="1">Janeiro</option>
              <option value="2">Fevereiro</option>
              <option value="3">Março</option>
              <option value="4">Abril</option>
              <option value="5">Maio</option>
              <option value="6">Junho</option>
              <option value="7">Julho</option>
              <option value="8">Agosto</option>
              <option value="9">Setembro</option>
              <option value="10">Outubro</option>
              <option value="11">Novembro</option>
              <option value="12">Dezembro</option>
            </select>
          </label>
          <label className="text-gray-700 font-semibold flex   gap-5 items-center">
            Ano:
            <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
          </label>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col md:flex-row gap-6">
        <div className=" bg-green-100  p-4 rounded-lg shadow-md flex items-center">
          <div className="text-green-500 text-3xl mr-4">
            <FaArrowUp />
          </div>
          <div>
            <p className="font-bold text-3xl">R$ 10.000,00</p>
            <h2 className="font-medium text-sm mt-2 opacity-70">Receita</h2>
          </div>
        </div>

        <div className=" bg-red-100 p-4 rounded-lg shadow-md flex items-center">
          <div className="text-red-500 text-3xl mr-4">
            <FaArrowDown />
          </div>
          <div>
            <p className="font-bold text-3xl">R$ 4.500,00</p>
            <h2 className="font-medium text-sm mt-2 opacity-70">Despesa</h2>
          </div>
        </div>

        <div className=" bg-blue-100 border-blue-500 p-4 rounded-lg shadow-md flex items-center">
          <div className="text-blue-500 text-3xl mr-4">
            <FaWallet />
          </div>
          <div>
            <p className="font-bold text-3xl">R$ 5.500,00</p>
            <h2 className="font-medium text-sm mt-2 opacity-70">Saldo</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
