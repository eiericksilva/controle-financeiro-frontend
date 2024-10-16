import { VscEdit, VscTrash } from "react-icons/vsc";
import Button from "../components/button/button";
import { useEffect, useState } from "react";
import { api } from "../services/axios";
import UserModal from "../components/modals/userModal/userModal";
import { AiOutlinePlus } from "react-icons/ai";

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
    <>
      <UserModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        refreshUsers={refreshUsers}
      />
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-black">
          Gerenciamento de Usuários
        </h1>
        <Button title="Criar Usuário" onClick={() => setIsOpen(true)}>
          <AiOutlinePlus className="text-lg" />
        </Button>
      </header>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-left text-sm ">
          <thead className="bg-blue-500 text-xs uppercase text-white">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Username</th>
              <th className="px-6 py-3">First Name</th>
              <th className="px-6 py-3">Last Name</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.length ? (
              users.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-blue-50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-black">
                    {user.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.username}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.firstName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.lastName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap flex items-center gap-2">
                    <VscEdit
                      className="text-blue-600 hover:text-blue-800 transition-colors duration-200 cursor-pointer"
                      onClick={() => handleEditUser(user)}
                    />
                    <VscTrash
                      className="text-red-600 hover:text-red-800 transition-colors duration-200 cursor-pointer"
                      onClick={() => handleTrashUser(user.id)}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                  There are no registered users
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
