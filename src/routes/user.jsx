import { VscEdit, VscTrash } from "react-icons/vsc";
import Button from "../components/button/button";
import SearchInput from "../components/searchInput/searchInput";
import { useEffect, useState } from "react";
import { api } from "../services/axios";
import UserModal from "../components/userModal/userModal";

export default function User() {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const refreshUsers = () => {
    api
      .get("/users")
      .then((res) => {
        setUsers(res.data);
        setCurrentUser(null);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    refreshUsers();
  }, []);

  const handleTrashUser = (userId) => {
    api
      .delete(`/users/${userId}`)
      .then((res) => {
        setCurrentUser(null);
        refreshUsers();
      })
      .catch((error) => console.log(error));
  };

  const handleEditUser = (user) => {
    setCurrentUser(user);
    setIsOpen(true);
  };

  return (
    <div id="user">
      <UserModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        refreshUsers={refreshUsers}
      />
      <div>
        <header>
          <h1 className="text-3xl pb-4">User Query</h1>
          <hr className="py-4" />
        </header>
        <section className="flex items-center justify-between">
          <h2 className="text-2xl pb-4">Users</h2>
          <SearchInput placeholder="Search User" />
          <Button title="New User" onClick={() => setIsOpen(true)} />
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
                <tr
                  key={user.id}
                  className="hover:bg-orange-200 transition delay-75"
                >
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
                    <VscEdit
                      className="hover:cursor-pointer"
                      onClick={() => handleEditUser(user)}
                    />
                    <VscTrash
                      className="hover:cursor-pointer"
                      onClick={() => handleTrashUser(user.id)}
                    />
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
