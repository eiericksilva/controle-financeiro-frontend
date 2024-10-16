/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

import { api } from "../../../services/axios";
import Button from "../../button/button";
import { toast } from "react-toastify";

const CreateTransactionModal = ({
  categories = [],
  isOpen,
  onClose,
  tags,
  accounts,
  onCreateTransaction,
}) => {
  const [transactionType, setTransactionType] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [observation, setObservation] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [sourceAccount, setSourceAccount] = useState("");
  const [destinationAccount, setDestinationAccount] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [subcategories, setSubcategories] = useState([]);
  const [expiredDate, setExpiredDate] = useState("");

  useEffect(() => {
    if (category) {
      api
        .get(`/categories/${category}`)
        .then((res) => setSubcategories(res.data.subcategories))
        .catch((error) => console.log(error));
    }
  }, [category]);

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedCategories((prev) => [...prev, value]);
    } else {
      setSelectedCategories((prev) => prev.filter((cat) => cat !== value));
    }
  };

  const [selectedCategories, setSelectedCategories] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();

    let baseURL = "/transactions";
    let payload = {
      transactionType,
      amount,
      description,
      observation,
      isConfirmed,
      tags: selectedTags.map((tagId) => ({ id: tagId })),
    };

    let endpoint = "";

    switch (transactionType) {
      case "INCOME":
        endpoint = `${baseURL}/income`;
        payload = {
          ...payload,
          category: category ? { id: category } : null,
          subcategory: subcategory ? { id: subcategory } : null,
          expiredDate,
          destinationAccount: { id: destinationAccount },
        };
        break;
      case "EXPENSE":
        endpoint = `${baseURL}/expense`;
        payload = {
          ...payload,
          category: category ? { id: category } : null,
          subcategory: subcategory ? { id: subcategory } : null,
          expiredDate,
          sourceAccount: { id: sourceAccount },
        };
        break;
      case "TRANSFER":
        endpoint = `${baseURL}/transfer`;
        payload = {
          ...payload,
          sourceAccount: { id: sourceAccount },
          destinationAccount: { id: destinationAccount },
        };
        break;
      default:
        console.error("Invalid transaction type");
        return;
    }

    const url = endpoint;

    api
      .post(url, payload)
      .then((res) => {
        toast.success("Transação registrada com sucesso!");
        onCreateTransaction();
        console.log(res);
        onClose();
      })
      .catch((error) => {
        console.log(error);

        toast.error("Não foi possível registrar a Transação");
      });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-10">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-5xl">
        <h2 className="text-xl font-bold mb-4">Criar Transação</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Tipo da Transação
            </label>
            <select
              className="h-10 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              value={transactionType}
              onChange={(e) => setTransactionType(e.target.value)}
              required
            >
              <option value="">Selecione um Tipo</option>
              <option value="INCOME">Receita</option>
              <option value="EXPENSE">Despesa</option>
              <option value="TRANSFER">Transferência</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 ">
              Valor
            </label>
            <input
              type="number"
              className="p-1 mt-1 h-10 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              placeholder="10.54"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Descrição
            </label>
            <input
              type="text"
              className="mt-1 h-10 p-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Observação
            </label>
            <input
              type="text"
              className="mt-1 h-10 p-1  block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              value={observation}
              onChange={(e) => setObservation(e.target.value)}
            />
          </div>

          {transactionType === "INCOME" || transactionType === "EXPENSE" ? (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Categoria
                </label>
                <select
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value=""> Selecione uma Categoria</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Subcategoria
                </label>
                <select
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  value={subcategory}
                  onChange={(e) => setSubcategory(e.target.value)}
                >
                  <option value="">Selecione uma Subcategoria</option>
                  {subcategories.map((sub) => (
                    <option key={sub.id} value={sub.id}>
                      {sub.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Vencimento
                </label>
                <input
                  type="date"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  value={expiredDate}
                  onChange={(e) => setExpiredDate(e.target.value)}
                />
              </div>
            </>
          ) : null}

          <div className="flex items-center gap-2 mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <input
              type="checkbox"
              checked={isConfirmed}
              onChange={(e) => setIsConfirmed(e.target.checked)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tags
            </label>
            <select
              multiple
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 p-2"
              value={selectedTags}
              onChange={(e) =>
                setSelectedTags(
                  [...e.target.selectedOptions].map((o) => o.value)
                )
              }
            >
              {tags.map((tag) => (
                <option
                  key={tag.id}
                  value={tag.id}
                  className="p-2 hover:bg-indigo-100"
                >
                  {tag.name}
                </option>
              ))}
            </select>
            <small className="text-gray-500 mt-1">
              Segure Ctrl (ou Cmd) para selecionar múltiplas tags.
            </small>
          </div>

          {transactionType === "TRANSFER" ? (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Conta de Origem
                </label>
                <select
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  value={sourceAccount}
                  onChange={(e) => setSourceAccount(e.target.value)}
                >
                  <option value="">Selecione a Conta de Origem</option>
                  {accounts.map((acc) => (
                    <option key={acc.id} value={acc.id}>
                      {acc.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Conta de Destino
                </label>
                <select
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  value={destinationAccount}
                  onChange={(e) => setDestinationAccount(e.target.value)}
                >
                  <option value="">Selecione a Conta de Destino</option>
                  {accounts.map((acc) => (
                    <option key={acc.id} value={acc.id}>
                      {acc.name}
                    </option>
                  ))}
                </select>
              </div>
            </>
          ) : null}

          {transactionType === "INCOME" ? (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Conta de Destino
              </label>
              <select
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                value={destinationAccount}
                onChange={(e) => setDestinationAccount(e.target.value)}
              >
                <option value="">Selecione a Conta de Destino</option>
                {accounts.map((acc) => (
                  <option key={acc.id} value={acc.id}>
                    {acc.name}
                  </option>
                ))}
              </select>
            </div>
          ) : null}

          {transactionType === "EXPENSE" ? (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Conta de Origem
              </label>
              <select
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                value={sourceAccount}
                onChange={(e) => setSourceAccount(e.target.value)}
              >
                <option value="">Selecione a Conta de Origem</option>
                {accounts.map((acc) => (
                  <option key={acc.id} value={acc.id}>
                    {acc.name}
                  </option>
                ))}
              </select>
            </div>
          ) : null}

          <div className="flex justify-end gap-2">
            <Button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
              title="Create"
            />
            <Button
              type="button"
              className="px-4 py-2  bg-red-500 hover:bg-red-600"
              onClick={onClose}
              title="Cancel"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTransactionModal;
