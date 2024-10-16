import { AiOutlinePlus } from "react-icons/ai";
import Button from "../components/button/button";
import { api } from "../services/axios";
import { useState, useEffect } from "react";
import { formatCurrency } from "../utils/formatCurrency";
import AccountCard from "../components/accountCard/AccountCard";
import CreateOrEditWalletModal from "../components/modals/createOrEditWalletModal/CreateOrEditWalletModal";

export default function Account() {
  const [accounts, setAccounts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // Controle de abertura do modal

  useEffect(() => {
    api
      .get("/accounts")
      .then((res) => setAccounts(res.data))
      .catch((error) => console.log(error));
  }, []);

  // Função para recarregar as contas após a criação/edição
  const handleAccountUpdated = () => {
    api
      .get("/accounts")
      .then((res) => setAccounts(res.data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div>
        <header>
          <h1 className="text-3xl py-4">Gerenciamento de Carteiras</h1>
        </header>
        <section className="flex items-center justify-between">
          <p className="text-2xl">Carteiras</p>
          <Button title="Criar Carteira" onClick={() => setIsModalOpen(true)}>
            <AiOutlinePlus />
          </Button>
        </section>
        <hr className="my-4" />
        <div className="flex gap-4">
          {accounts.length ? (
            accounts.map((account) => (
              <AccountCard
                key={account.id}
                name={account.name}
                balance={formatCurrency(account.balance)}
                firstName={account.user.firstName}
              />
            ))
          ) : (
            <div>Nenhuma carteira registrada ainda</div>
          )}
        </div>
      </div>

      {/* Modal para criar ou editar conta */}
      <CreateOrEditWalletModal
        isOpen={isModalOpen} // Modal visível com base nesse estado
        onClose={() => setIsModalOpen(false)} // Função para fechar o modal
        onAccountUpdated={handleAccountUpdated} // Função chamada após atualização da conta
      />
    </div>
  );
}
