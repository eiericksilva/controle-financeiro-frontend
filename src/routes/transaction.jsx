import { VscTrash } from "react-icons/vsc";
import Tag from "../components/tag/tag";
import { FcCheckmark } from "react-icons/fc";
import { TfiAlert } from "react-icons/tfi";
import { BsArrowRight } from "react-icons/bs";
import { useEffect, useState } from "react";
import { api } from "../services/axios";
import Button from "../components/button/button";
import { AiOutlinePlus } from "react-icons/ai";
import { formatCurrency } from "../utils/formatCurrency";
import DeleteTransactionModal from "../components/DeleteTransactionModal/deleteTransactionModal";

export default function Transaction() {
  const [transactions, setTransactions] = useState([]);
  const [tags] = useState([]);
  const [transactionToDelete, setTransactionToDelete] = useState(null);
  const [deleteTransactionModalIsOpen, setDeleteTransactionModalIsOpen] =
    useState(false);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = () => {
    api
      .get("/transactions")
      .then((res) => setTransactions(res.data))
      .catch((error) => console.log(error));
  };

  const handleTrashTransaction = (transactionId) => {
    setTransactionToDelete(transactionId);
    setDeleteTransactionModalIsOpen(true);
  };

  const confirmDeleteTransaction = () => {
    if (!transactionToDelete) return;

    api
      .delete(`/transactions/${transactionToDelete}`)
      .then((res) => {
        console.log(res);
        fetchTransactions();
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setDeleteTransactionModalIsOpen(false);
        setTransactionToDelete(null);
      });
  };

  return (
    <div>
      <DeleteTransactionModal
        isOpen={deleteTransactionModalIsOpen}
        onConfirm={confirmDeleteTransaction}
        onCancel={() => setDeleteTransactionModalIsOpen(false)}
      />
      <div>
        <h1 className="text-3xl py-4">Transaction Query</h1>
        <hr />
        <div>
          <div
            id="containerFilter"
            className="flex p-4 py-8 mb-8 min-w-60 rounded-lg  gap-4 flex-1 justify-between items-start shadow-lg"
          >
            <div>
              <label
                htmlFor="search_id"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                ID:
              </label>
              <input
                type="text"
                name="search_id"
                id="search_id"
                className="mt-1 form-input block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
              />
            </div>

            <div className="flex items-center justify-center flex-col">
              <div className="flex items-center">
                <label htmlFor="fromDate">De</label>{" "}
                <input
                  type="date"
                  id="fromDate"
                  className="data border border-gray-300 rounded-md"
                />
              </div>
              <span>
                <BsArrowRight />
              </span>
              <div className="flex items-center">
                <label htmlFor="toDate">Até</label>{" "}
                <input
                  type="date"
                  id="toDate"
                  className="data border border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="w-full max-w-xs">
              <label
                htmlFor="category_type"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Transaction Type
              </label>
              <select
                id="category_type"
                name="category_type"
                className="mt-1 form-select block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
              >
                <option value="INCOME">Income</option>
                <option value="EXPENSE">Expense</option>
                <option value="TRANSFER">Transfer</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="tagFilter"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Tag
              </label>
              <select
                id="tagFilter"
                className="mt-1 form-select block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
              >
                <option value="">Todas as Tags</option>
                {tags.map((tag) => (
                  <option key={tag.id} value={tag.name}>
                    {tag.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <section className="flex items-center justify-between py-4">
            <div className=" items-center gap-1">
              <h2 className="text-2xl">Transactions</h2>
              <span className="text-sm font-thin">
                (Clique em uma Transaction para ver detalhes)
              </span>
            </div>
            <Button title="New Transaction" onClick={() => {}}>
              <AiOutlinePlus />
            </Button>
          </section>
          <div className="overflow-x-scroll">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                  </th>

                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Transaction Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Subcategory
                  </th>

                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Expired Date
                  </th>

                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Is Confirmed
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tag
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Source Account
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Destination Account
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactions.length ? (
                  transactions.map((transaction) => (
                    <tr
                      key={transaction.id}
                      className="hover:bg-amber-100 transition delay-75"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        {transaction.id}
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        {transaction.transactionType}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {formatCurrency(transaction.amount)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {transaction?.category?.name}{" "}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {transaction.subcategory?.name}{" "}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {transaction.expiredDate}{" "}
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        {transaction.isConfirmed ? (
                          <FcCheckmark />
                        ) : (
                          <TfiAlert className="text-red-600" />
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap flex">
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
                      <td className="gap-2 flex items-center py-4">
                        <VscTrash
                          className="hover:cursor-pointer"
                          onClick={() => {
                            handleTrashTransaction(transaction.id);
                          }}
                        />
                      </td>
                    </tr>
                  ))
                ) : (
                  <div>There are no registered transactions</div>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
