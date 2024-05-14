import { VscEdit, VscTrash } from "react-icons/vsc";
import Tag from "../components/tag/tag";
import { FcCheckmark } from "react-icons/fc";
import { TfiAlert } from "react-icons/tfi";

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

  return (
    <div>
      <div>
        <h1 className="text-3xl pb-4">Transaction Query</h1>
        <hr />
        <div>
          <h1>Filtros</h1>
          <div className="flex">
            <div>
              <span>de | para </span>
            </div>
            <div>
              <div>categories</div>
            </div>
            <div>
              <div>conta</div>
            </div>
            <div>
              <div>tag</div>
            </div>
            <div>
              <div>status</div>
            </div>
            <div>
              <div>tipo</div>
            </div>
          </div>
          <div>
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
                    <tr key={transaction.id}>
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
