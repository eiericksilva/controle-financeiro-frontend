import { VscEdit, VscTrash } from "react-icons/vsc";
import Tag from "../components/tag/tag";
import { FcCheckmark } from "react-icons/fc";
import { TfiAlert } from "react-icons/tfi";
import { BsArrowRight } from "react-icons/bs";

export default function Transaction() {
  const transactions = [
    {
      id: 2,
      timeStamp: "2024-05-09T23:47:01Z",
      transactionType: "EXPENSE",
      amount: 20.0,
      category: {
        id: 3,
        name: "Bônus",
        categoryType: "INCOME",
        subcategories: [
          {
            id: 5,
            name: "Bônus A",
          },
          {
            id: 6,
            name: "Bônus B",
          },
          {
            id: 7,
            name: "Bônus C",
          },
        ],
      },
      subcategory: null,
      expiredDate: "2024-07-25",
      description: "aaa",
      observation: "bbb",
      isConfirmed: false,
      tags: [
        {
          id: 1,
          name: "Débito",
        },
      ],
      sourceAccount: {
        id: 2,
        name: "CAIXA ECONÔMICA 24",
        balance: 10.0,
      },
      destinationAccount: {
        id: 2,
        name: "CAIXA ECONÔMICA 24",
        balance: 10.0,
      },
    },
    {
      id: 3,
      timeStamp: "2024-05-09T23:52:22Z",
      transactionType: "EXPENSE",
      amount: 660.9,
      category: {
        id: 3,
        name: "Bônus",
        categoryType: "INCOME",
        subcategories: [
          {
            id: 5,
            name: "Bônus A",
          },
          {
            id: 6,
            name: "Bônus B",
          },
          {
            id: 7,
            name: "Bônus C",
          },
        ],
      },
      subcategory: null,
      expiredDate: "2024-07-25",
      description: "aaa",
      observation: "bbb",
      isConfirmed: true,
      tags: [
        {
          id: 1,
          name: "Débito",
        },
      ],
      sourceAccount: {
        id: 1,
        name: "CAIXA ECONÔMICA",
        balance: 5011.0,
      },
      destinationAccount: {
        id: 1,
        name: "CAIXA ECONÔMICA",
        balance: 5011.0,
      },
    },
    {
      id: 4,
      timeStamp: "2024-05-09T23:55:18Z",
      transactionType: "EXPENSE",
      amount: 1000.0,
      category: {
        id: 3,
        name: "Bônus",
        categoryType: "INCOME",
        subcategories: [
          {
            id: 5,
            name: "Bônus A",
          },
          {
            id: 6,
            name: "Bônus B",
          },
          {
            id: 7,
            name: "Bônus C",
          },
        ],
      },
      subcategory: null,
      expiredDate: "2024-07-25",
      description: "aaa",
      observation: "bbb",
      isConfirmed: true,
      tags: [
        {
          id: 1,
          name: "Débito",
        },
      ],
      sourceAccount: {
        id: 1,
        name: "CAIXA ECONÔMICA",
        balance: 5011.0,
      },
      destinationAccount: {
        id: 1,
        name: "CAIXA ECONÔMICA",
        balance: 5011.0,
      },
    },
    {
      id: 5,
      timeStamp: "2024-05-09T23:56:22Z",
      transactionType: "EXPENSE",
      amount: 0.1,
      category: {
        id: 3,
        name: "Bônus",
        categoryType: "INCOME",
        subcategories: [
          {
            id: 5,
            name: "Bônus A",
          },
          {
            id: 6,
            name: "Bônus B",
          },
          {
            id: 7,
            name: "Bônus C",
          },
        ],
      },
      subcategory: null,
      expiredDate: "2024-07-25",
      description: "aaa",
      observation: "bbb",
      isConfirmed: true,
      tags: [
        {
          id: 1,
          name: "Débito",
        },
      ],
      sourceAccount: {
        id: 2,
        name: "CAIXA ECONÔMICA 24",
        balance: 10.0,
      },
      destinationAccount: {
        id: 2,
        name: "CAIXA ECONÔMICA 24",
        balance: 10.0,
      },
    },
    {
      id: 6,
      timeStamp: "2024-05-09T23:56:49Z",
      transactionType: "EXPENSE",
      amount: 0.7,
      category: {
        id: 3,
        name: "Bônus",
        categoryType: "INCOME",
        subcategories: [
          {
            id: 5,
            name: "Bônus A",
          },
          {
            id: 6,
            name: "Bônus B",
          },
          {
            id: 7,
            name: "Bônus C",
          },
        ],
      },
      subcategory: null,
      expiredDate: "2024-07-25",
      description: "aaa",
      observation: "bbb",
      isConfirmed: false,
      tags: [
        {
          id: 1,
          name: "Débito",
        },
      ],
      sourceAccount: {
        id: 2,
        name: "CAIXA ECONÔMICA 24",
        balance: 10.0,
      },
      destinationAccount: {
        id: 2,
        name: "CAIXA ECONÔMICA 24",
        balance: 10.0,
      },
    },
    {
      id: 7,
      timeStamp: "2024-05-09T23:57:52Z",
      transactionType: "EXPENSE",
      amount: 10.9,
      category: {
        id: 3,
        name: "Bônus",
        categoryType: "INCOME",
        subcategories: [
          {
            id: 5,
            name: "Bônus A",
          },
          {
            id: 6,
            name: "Bônus B",
          },
          {
            id: 7,
            name: "Bônus C",
          },
        ],
      },
      subcategory: null,
      expiredDate: "2024-07-25",
      description: "aaa",
      observation: "bbb",
      isConfirmed: true,
      tags: [
        {
          id: 1,
          name: "Débito",
        },
      ],
      sourceAccount: null,
      destinationAccount: {
        id: 2,
        name: "CAIXA ECONÔMICA 24",
        balance: 10.0,
      },
    },
    {
      id: 8,
      timeStamp: "2024-05-10T00:09:54Z",
      transactionType: "TRANSFER",
      amount: 2500.0,
      category: null,
      subcategory: null,
      expiredDate: null,
      description: "aaa",
      observation: "bbb",
      isConfirmed: true,
      tags: [],
      sourceAccount: {
        id: 1,
        name: "CAIXA ECONÔMICA",
        balance: 5011.0,
      },
      destinationAccount: {
        id: 2,
        name: "CAIXA ECONÔMICA 24",
        balance: 10.0,
      },
    },
    {
      id: 9,
      timeStamp: "2024-05-10T00:29:26Z",
      transactionType: "TRANSFER",
      amount: 2500.0,
      category: null,
      subcategory: null,
      expiredDate: null,
      description: "aaa",
      observation: "bbb",
      isConfirmed: true,
      tags: [],
      sourceAccount: {
        id: 1,
        name: "CAIXA ECONÔMICA",
        balance: 5011.0,
      },
      destinationAccount: {
        id: 2,
        name: "CAIXA ECONÔMICA 24",
        balance: 10.0,
      },
    },
    {
      id: 10,
      timeStamp: "2024-05-10T00:30:22Z",
      transactionType: "TRANSFER",
      amount: 5000.0,
      category: null,
      subcategory: null,
      expiredDate: null,
      description: "aaa",
      observation: "bbb",
      isConfirmed: true,
      tags: [],
      sourceAccount: {
        id: 2,
        name: "CAIXA ECONÔMICA 24",
        balance: 10.0,
      },
      destinationAccount: {
        id: 1,
        name: "CAIXA ECONÔMICA",
        balance: 5011.0,
      },
    },
    {
      id: 11,
      timeStamp: "2024-05-10T00:30:52Z",
      transactionType: "TRANSFER",
      amount: 11.0,
      category: null,
      subcategory: null,
      expiredDate: null,
      description: "aaa",
      observation: "bbb",
      isConfirmed: true,
      tags: [],
      sourceAccount: {
        id: 2,
        name: "CAIXA ECONÔMICA 24",
        balance: 10.0,
      },
      destinationAccount: {
        id: 1,
        name: "CAIXA ECONÔMICA",
        balance: 5011.0,
      },
    },
    {
      id: 12,
      timeStamp: "2024-05-11T18:04:04Z",
      transactionType: "TRANSFER",
      amount: 0.0,
      category: null,
      subcategory: null,
      expiredDate: null,
      description: "aaa",
      observation: "bbb",
      isConfirmed: true,
      tags: [],
      sourceAccount: {
        id: 2,
        name: "CAIXA ECONÔMICA 24",
        balance: 10.0,
      },
      destinationAccount: {
        id: 1,
        name: "CAIXA ECONÔMICA",
        balance: 5011.0,
      },
    },
    {
      id: 13,
      timeStamp: "2024-05-11T18:05:07Z",
      transactionType: "TRANSFER",
      amount: 0.0,
      category: null,
      subcategory: null,
      expiredDate: null,
      description: "aaa",
      observation: "bbb",
      isConfirmed: true,
      tags: [],
      sourceAccount: {
        id: 2,
        name: "CAIXA ECONÔMICA 24",
        balance: 10.0,
      },
      destinationAccount: {
        id: 1,
        name: "CAIXA ECONÔMICA",
        balance: 5011.0,
      },
    },
    {
      id: 14,
      timeStamp: "2024-05-11T18:22:02Z",
      transactionType: "INCOME",
      amount: 10.0,
      category: {
        id: 3,
        name: "Bônus",
        categoryType: "INCOME",
        subcategories: [
          {
            id: 5,
            name: "Bônus A",
          },
          {
            id: 6,
            name: "Bônus B",
          },
          {
            id: 7,
            name: "Bônus C",
          },
        ],
      },
      subcategory: null,
      expiredDate: "2024-07-25",
      description: "aaa",
      observation: "bbb",
      isConfirmed: true,
      tags: [
        {
          id: 1,
          name: "Débito",
        },
      ],
      sourceAccount: null,
      destinationAccount: {
        id: 2,
        name: "CAIXA ECONÔMICA 24",
        balance: 10.0,
      },
    },
  ];

  const tags = [
    {
      id: 1,
      name: "Tag A",
    },
    {
      id: 2,
      name: "Tag B",
    },
    {
      id: 3,
      name: "Tag C",
    },
    {
      id: 4,
      name: "Tag D",
    },
    {
      id: 5,
      name: "Alimentação",
    },
    {
      id: 6,
      name: "helicoptero",
    },
  ];

  return (
    <div className="">
      <div>
        <h1 className="text-3xl pb-4">Transaction Query</h1>
        <hr />
        <div className="mt-2">
          <div
            id="containerFilter"
            className="flex bg-amber-50 min-w-60 rounded-lg shadow-sm gap-4 flex-1 justify-between items-start"
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

            <div>
              <label htmlFor="tagFilter">Tag:</label>
              <select id="tagFilter">
                <option value="">Todas as Tags</option>
                {tags.map((tag) => (
                  <option key={tag.id} value={tag.name}>
                    {tag.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="overflow-x-scroll">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    timeStamp
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
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Observation
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
                      className="hover:bg-orange-200 transition delay-75"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        {transaction.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {transaction.timeStamp}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {transaction.transactionType}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {transaction.amount}{" "}
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
                        {transaction.description}{" "}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {transaction.observation}{" "}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {transaction.isConfirmed ? (
                          <FcCheckmark />
                        ) : (
                          <TfiAlert className="text-red-600" />
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {transaction.tags.map((tag) => (
                          <Tag key={tag.id} name={tag.name} />
                        ))}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {transaction.sourceAccount?.name}{" "}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {transaction.destinationAccount?.name}{" "}
                      </td>
                      <td className="gap-2 flex items-center py-4">
                        <VscEdit className="hover:cursor-pointer" />
                        <VscTrash className="hover:cursor-pointer" />
                      </td>
                    </tr>
                  ))
                ) : (
                  <span>There are no registered transactions</span>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
