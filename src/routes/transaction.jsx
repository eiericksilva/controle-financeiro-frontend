import { VscTrash } from "react-icons/vsc";
import Tag from "../components/tag/tag";
import { FcCheckmark } from "react-icons/fc";
import { TfiAlert } from "react-icons/tfi";
import { useEffect, useState } from "react";
import { api } from "../services/axios";
import Button from "../components/button/button";
import { AiOutlinePlus } from "react-icons/ai";
import { formatCurrency } from "../utils/formatCurrency";
import CreateTransactionModal from "../components/modals/createTransactionModal/createTransactionModal";
import { toast } from "react-toastify";
import DeleteConfirmModal from "../components/modals/deleteConfirmModal/deleteConfirmModal";

export default function Transaction() {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]); // Novo estado para armazenar transações filtradas
  const [tags, setTags] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [transactionToDelete, setTransactionToDelete] = useState(null);
  const [deleteConfirmModalIsOpen, setDeleteConfirmModalIsOpen] =
    useState(false);
  const [createTransactionModalIsOpen, setCreateTransactionModalIsOpen] =
    useState(false);

  // Estados para o filtro
  const [filterColumn, setFilterColumn] = useState("id");
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    fetchTransactions();
    fetchTags();
    fetchCategories();
    fetchAccounts();
  }, []);

  const fetchTransactions = () => {
    api
      .get("/transactions")
      .then((res) => {
        setTransactions(res.data);
        setFilteredTransactions(res.data);
      })
      .catch((error) => console.log(error));
  };

  const fetchTags = () => {
    api
      .get("/tags")
      .then((res) => setTags(res.data))
      .catch((error) => console.log(error));
  };

  const fetchCategories = () => {
    api
      .get("/categories")
      .then((res) => {
        let categories_found = res.data;
        setCategories(categories_found);

        if (categories_found.length > 0) {
          let allSubcategories = [];
          categories_found.forEach((c) => {
            allSubcategories = [...allSubcategories, ...c.subcategory];
          });
          setSubcategories(allSubcategories);
        }
      })
      .catch((error) => console.log(error));
  };

  const fetchAccounts = () => {
    api
      .get("/accounts")
      .then((res) => setAccounts(res.data))
      .catch((error) => console.log(error));
  };

  const handleNewTransaction = () => {
    fetchTransactions();
  };

  const handleTrashTransaction = (transactionId) => {
    setTransactionToDelete(transactionId);
    setDeleteConfirmModalIsOpen(true);
  };

  const confirmDeleteTransaction = () => {
    if (!transactionToDelete) return;

    api
      .delete(`/transactions/${transactionToDelete}`)
      .then((res) => {
        console.log(res);
        toast.success("Transação excluida com sucesso!");
        fetchTransactions();
      })
      .catch((error) => {
        toast.error("Não foi possível excluir a Transação");
        console.log(error);
      })
      .finally(() => {
        setDeleteConfirmModalIsOpen(false);
        setTransactionToDelete(null);
      });
  };

  const handleFilter = () => {
    const filtered = transactions.filter((transaction) =>
      String(transaction[filterColumn])
        .toLowerCase()
        .includes(filterValue.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  return (
    <>
      <DeleteConfirmModal
        isOpen={deleteConfirmModalIsOpen}
        onConfirm={confirmDeleteTransaction}
        onCancel={() => setDeleteConfirmModalIsOpen(false)}
      />
      <CreateTransactionModal
        isOpen={createTransactionModalIsOpen}
        onClose={() => setCreateTransactionModalIsOpen(false)}
        tags={tags}
        categories={categories}
        subcategories={subcategories}
        accounts={accounts}
        onCreateTransaction={handleNewTransaction}
      />

      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-black">
          Gerenciamento de Transações
        </h1>
        <Button
          title="Criar Transação"
          onClick={() => setCreateTransactionModalIsOpen(true)}
        >
          <AiOutlinePlus className="text-lg" />
        </Button>
      </header>

      {/* Filtros */}
      <div className="mb-6">
        <select
          value={filterColumn}
          onChange={(e) => setFilterColumn(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1"
        >
          <option value="id">ID</option>
          <option value="transactionType">Tipo</option>
          <option value="description">Descrição</option>
          <option value="amount">Valor</option>
          <option value="category">Categoria</option>
          <option value="subcategory">Subcategoria</option>
          <option value="expiredDate">Vencimento</option>
          <option value="sourceAccount">Conta de Origem</option>
          <option value="destinationAccount">Conta de Destino</option>
        </select>
        <input
          type="text"
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
          placeholder="Valor do filtro"
          className="ml-2 border border-gray-300 rounded px-2 py-1"
        />
        <Button title="Filtrar" onClick={handleFilter} className="ml-2" />
      </div>

      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-blue-500 text-xs uppercase text-white">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Tipo</th>
              <th className="px-6 py-3">Descrição</th>
              <th className="px-6 py-3">Valor</th>
              <th className="px-6 py-3">Categoria</th>
              <th className="px-6 py-3">Subcategoria</th>
              <th className="px-6 py-3">Vencimento</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Tags</th>
              <th className="px-6 py-3">Conta de Origem</th>
              <th className="px-6 py-3">Conta de Destino</th>
              <th className="px-6 py-3">Ações</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredTransactions.length ? (
              filteredTransactions.map((transaction) => (
                <tr
                  key={transaction.id}
                  className="hover:bg-blue-50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-black">
                    {transaction.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {transaction.transactionType}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {transaction.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-semibold text-green-600">
                    {formatCurrency(transaction.amount)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {transaction?.category?.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {transaction.subcategory?.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {transaction.expiredDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {transaction.isConfirmed ? (
                      <FcCheckmark className="text-xl" />
                    ) : (
                      <TfiAlert className="text-red-600 text-xl" />
                    )}
                  </td>
                  <td className="flex px-6 py-4 whitespace-nowrap align-middle">
                    {transaction.tags.map((tag) => (
                      <Tag key={tag.id} name={tag.name} />
                    ))}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {transaction.sourceAccount?.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {transaction.destinationAccount?.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap flex items-center gap-2">
                    <VscTrash
                      className="text-red-600 hover:text-red-800 transition-colors cursor-pointer"
                      onClick={() => handleTrashTransaction(transaction.id)}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="12"
                  className="px-6 py-4 text-center text-gray-500"
                >
                  Não há Transações Registradas no momento
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
