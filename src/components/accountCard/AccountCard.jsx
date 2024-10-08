import { VscEdit } from "react-icons/vsc";

const AccountCard = ({ name, balance }) => {
  return (
    <div className="flex flex-col justify-between w-80 min-h-36 bg-slate-200 p-4  shadow-md">
      <header className="flex items-center justify-between py-2">
        <div>
          <h1 className="uppercase font-bold">{name}</h1>
        </div>
        <div>
          <VscEdit className="hover:cursor-pointer" />
        </div>
      </header>
      <section>
        <div className="text-sm">balance:</div>
        <div className="font-bold text-3xl">
          <span className="text-sm font-normal">R$ </span>
          {balance}
        </div>
      </section>
    </div>
  );
};

export default AccountCard;
