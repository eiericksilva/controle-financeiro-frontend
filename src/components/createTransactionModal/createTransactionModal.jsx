/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Button from "../button/button";
import { api } from "../../services/axios";

const CreateTransactionModal = ({
  isOpen,
  onClose,
  tags,
  categories,
  accounts,
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
      // Fetch subcategories for the selected category
      api
        .get(`/categories/${category}`)
        .then((res) => setSubcategories(res.data.subcategories))
        .catch((error) => console.log(error));
    }
  }, [category]);

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
          category: { id: category },
          subcategory: { id: subcategory },
          expiredDate,
          destinationAccount: { id: destinationAccount },
        };
        break;
      case "EXPENSE":
        endpoint = `${baseURL}/expense`;
        payload = {
          ...payload,
          category: { id: category },
          subcategory: { id: subcategory },
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
        console.log(res);
        onClose();
      })
      .catch((error) => console.log(error));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-10">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-5xl">
        <h2 className="text-xl font-bold mb-4">Create Transaction</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Transaction Type
            </label>
            <select
              className="h-10 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              value={transactionType}
              onChange={(e) => setTransactionType(e.target.value)}
              required
            >
              <option value="">Select Type</option>
              <option value="INCOME">Income</option>
              <option value="EXPENSE">Expense</option>
              <option value="TRANSFER">Transfer</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 ">
              Amount
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
              Description
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
              Observation
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
                  Category
                </label>
                <select
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Select Category</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Subcategory
                </label>
                <select
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  value={subcategory}
                  onChange={(e) => setSubcategory(e.target.value)}
                >
                  <option value="">Select Subcategory</option>
                  {subcategories.map((sub) => (
                    <option key={sub.id} value={sub.id}>
                      {sub.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Expired Date
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
              Is Confirmed
            </label>
            <input
              type="checkbox"
              checked={isConfirmed}
              onChange={(e) => setIsConfirmed(e.target.checked)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Tags
            </label>
            <select
              multiple
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              value={selectedTags}
              onChange={(e) =>
                setSelectedTags(
                  [...e.target.selectedOptions].map((o) => o.value)
                )
              }
            >
              {tags.map((tag) => (
                <option key={tag.id} value={tag.id}>
                  {tag.name}
                </option>
              ))}
            </select>
          </div>

          {transactionType === "TRANSFER" ? (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Source Account
                </label>
                <select
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  value={sourceAccount}
                  onChange={(e) => setSourceAccount(e.target.value)}
                >
                  <option value="">Select Source Account</option>
                  {accounts.map((acc) => (
                    <option key={acc.id} value={acc.id}>
                      {acc.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Destination Account
                </label>
                <select
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  value={destinationAccount}
                  onChange={(e) => setDestinationAccount(e.target.value)}
                >
                  <option value="">Select Destination Account</option>
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
                Destination Account
              </label>
              <select
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                value={destinationAccount}
                onChange={(e) => setDestinationAccount(e.target.value)}
              >
                <option value="">Select Destination Account</option>
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
                Source Account
              </label>
              <select
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                value={sourceAccount}
                onChange={(e) => setSourceAccount(e.target.value)}
              >
                <option value="">Select Source Account</option>
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
              className="px-4 py-2 hover:bg-amber-200"
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
