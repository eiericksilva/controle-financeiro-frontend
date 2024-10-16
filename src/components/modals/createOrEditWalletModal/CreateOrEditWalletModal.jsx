import { useState, useEffect } from "react";
import { api } from "../../../services/axios";
import Button from "../../button/button";
import { toast } from "react-toastify";

const CreateOrEditWalletModal = ({
  isOpen,
  onClose,
  accountToEdit = null,
  onAccountUpdated,
}) => {
  const [name, setName] = useState(accountToEdit?.name || "");
  const [balance, setBalance] = useState(accountToEdit?.balance || "");
  const [users, setUsers] = useState([]); // Estado para armazenar a lista de usuários
  const [selectedUserId, setSelectedUserId] = useState(""); // Estado para o usuário selecionado

  // Buscar lista de usuários quando o modal abrir
  useEffect(() => {
    if (isOpen) {
      api
        .get("/users") // Supondo que a rota para buscar usuários seja essa
        .then((res) => {
          setUsers(res.data);
        })
        .catch((error) => {
          console.log(error);
          toast.error("Erro ao buscar usuários.");
        });
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedUserId) {
      toast.error("Por favor, selecione um usuário.");
      return;
    }

    const payload = {
      name,
      balance: parseFloat(balance),
      user: {
        id: selectedUserId, // Usar o ID do usuário selecionado
      },
    };
    console.log(payload);

    const request = accountToEdit
      ? api.put(`/accounts/${accountToEdit.id}`, payload)
      : api.post("/accounts", payload);

    request
      .then((res) => {
        toast.success(
          accountToEdit
            ? "Conta atualizada com sucesso!"
            : "Conta criada com sucesso!"
        );
        onAccountUpdated();
        onClose();
      })
      .catch((error) => {
        console.log(error);
        toast.error("Erro ao salvar a conta.");
      });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-10">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 ">
          {accountToEdit ? "Editar Conta" : "Criar Conta"}
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Nome da Conta */}
          <div className="mb-4">
            <label className="block text-sm font-medium ">Nome da Conta</label>
            <input
              type="text"
              className="mt-1 h-10 p-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Saldo */}
          <div className="mb-4">
            <label className="block text-sm font-medium ">Saldo</label>
            <input
              type="number"
              className="mt-1 h-10 p-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              value={balance}
              onChange={(e) => setBalance(e.target.value)}
              required
              placeholder="Ex: 1000.00"
            />
          </div>

          {/* Seleção de Usuário */}
          <div className="mb-4">
            <label className="block text-sm font-medium ">
              Selecionar Usuário
            </label>
            <select
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              value={selectedUserId}
              onChange={(e) => setSelectedUserId(e.target.value)}
              required
            >
              <option value="" disabled>
                Selecione um usuário
              </option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.firstName}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-end gap-2">
            <Button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
              title={accountToEdit ? "Atualizar" : "Criar"}
            />
            <Button
              type="button"
              className="px-4 py-2 bg-red-500 hover:bg-red-600"
              onClick={onClose}
              title="Cancelar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateOrEditWalletModal;
