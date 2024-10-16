import { VscEdit } from "react-icons/vsc";
import { FaRegMoneyBillAlt } from "react-icons/fa"; // Ícone para representar a conta

const AccountCard = ({ name, balance, firstName }) => {
  return (
    <div className="flex flex-col justify-between w-72 min-h-32 bg-gray-100 rounded-md border border-gray-300 p-4">
      <header className="flex items-center justify-between">
        <div className="flex items-center">
          <FaRegMoneyBillAlt className="text-xl text-gray-500 mr-2" />
          <h1 className="font-semibold text-lg text-gray-700">{name}</h1>
        </div>
        <VscEdit className="text-gray-500 hover:cursor-pointer hover:text-gray-700 transition-colors" />
      </header>
      <section className="mt-3">
        <div className="text-sm text-gray-500">Saldo:</div>
        <div className="font-bold text-xl text-gray-800">{balance}</div>
      </section>
      {/* Exibir o nome do usuário responsável */}
      <section className="mt-2">
        <div className="text-sm text-gray-500">Responsável:</div>
        <div className="font-bold text-gray-800">{firstName}</div>
      </section>
    </div>
  );
};

export default AccountCard;
