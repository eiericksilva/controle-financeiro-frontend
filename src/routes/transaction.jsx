import { VscTrash } from "react-icons/vsc";
import Tag from "../components/tag/tag";
import { FcCheckmark } from "react-icons/fc";
import { TfiAlert } from "react-icons/tfi";
import { useEffect, useState } from "react";
import { api } from "../services/axios";
import Button from "../components/button/button";
import { AiOutlinePlus } from "react-icons/ai";
import { formatCurrency } from "../utils/formatCurrency";
import DeleteTransactionModal from "../components/modals/deleteTransactionModal/deleteTransactionModal";
import CreateTransactionModal from "../components/modals/createTransactionModal/createTransactionModal";

export default function Transaction() {
  const [transactions, setTransactions] = useState([]);
  const [tags, setTags] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [transactionToDelete, setTransactionToDelete] = useState(null);
  const [deleteTransactionModalIsOpen, setDeleteTransactionModalIsOpen] =
    useState(false);
  const [createTransactionModalIsOpen, setCreateTransactionModalIsOpen] =
    useState(false);

  useEffect(() => {
    fetchTransactions();
    fetchTags();
    fetchCategories();
    fetchAccounts();
  }, []);

  const fetchTransactions = () => {
    api
      .get("/transactions")
      .then((res) => setTransactions(res.data))
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

  const handleNewTransaction = () => {
    fetchTransactions();
  };
  const fetchAccounts = () => {
    api
      .get("/accounts")
      .then((res) => setAccounts(res.data))
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
      <CreateTransactionModal
        isOpen={createTransactionModalIsOpen}
        onClose={() => setCreateTransactionModalIsOpen(false)}
        tags={tags}
        categories={categories}
        subcategories={subcategories}
        accounts={accounts}
        onCreateTransaction={handleNewTransaction}
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

            <div className="flex items-center justify-center flex-col space-y-4">
              <div className="flex items-center space-x-2">
                <label htmlFor="fromDate" className="font-semibold">
                  Data Inicial:
                </label>
                <input
                  type="date"
                  id="fromDate"
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex items-center space-x-2">
                <label htmlFor="toDate" className="font-semibold">
                  Data Final:
                </label>
                <input
                  type="date"
                  id="toDate"
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            <Button
              title="New Transaction"
              onClick={() => setCreateTransactionModalIsOpen(true)}
            >
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
                  <td colSpan="10">There are no registered transactions</td>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
