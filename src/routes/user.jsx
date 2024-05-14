import { VscEdit, VscTrash } from "react-icons/vsc";
import Button from "../components/button/button";
import Searchbar from "../components/searchbar/searchbar";

export default function User() {
  const users = [
    {
      id: 1,
      username: "eiericksilva",
      firstName: "Erick",
      lastName: "Oliveira da Silva",
    },
    {
      id: 2,
      username: "Bê",
      firstName: "Evelyn",
      lastName: "Fernanda Ferreira dos Reis",
    },
    {
      id: 3,
      username: "Cida",
      firstName: "Aparecida",
      lastName: "Oliveira da Silva",
    },
  ];

  return (
    <div id="user">
      <div>
        <header>
          <h1 className="text-3xl pb-4">User Query</h1>
          <hr className="py-4" />
        </header>
        <section className="flex items-center justify-between">
          <h2 className="text-2xl pb-4">Users</h2>
          <Searchbar />
          <Button title="New User" />
        </section>
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Username
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                First Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.length ? (
              users.map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{user.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.username}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.firstName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.lastName}{" "}
                  </td>
                  <td className="gap-2 flex items-center py-4">
                    <VscEdit className="hover:cursor-pointer" />
                    <VscTrash className="hover:cursor-pointer" />
                  </td>
                </tr>
              ))
            ) : (
              <span>There are no registered users</span>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
