import { useEffect, useState } from "react";
import { api } from "../../services/axios";

// eslint-disable-next-line react/prop-types
const UserModal = ({
  isOpen,
  setIsOpen,
  currentUser,
  setCurrentUser,
  refreshUsers,
}) => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    if (currentUser) {
      setUsername(currentUser.username);
      setFirstName(currentUser.firstName);
      setLastName(currentUser.lastName);
    } else {
      setUsername("");
      setFirstName("");
      setLastName("");
    }
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      username,
      firstName,
      lastName,
    };

    if (currentUser) {
      api
        .put(`/users/${currentUser.id}`, userData)
        .then((res) => {
          refreshUsers();
          setIsOpen(false);
        })
        .catch((error) => console.log(error));
    } else {
      api
        .post("/users", userData)
        .then((res) => {
          refreshUsers();
          setIsOpen(false);
        })
        .catch((error) => console.log(error));
    }
  };

  if (!isOpen) return null;

  const handleClose = () => {
    setCurrentUser(null);
    setIsOpen(false);
  };

  return (
    <div className="z-10 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-xl font-bold mb-4">
          {currentUser ? "Edit User" : "Create User"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block font-semibold mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="firstName" className="block font-semibold mb-1">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block font-semibold mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div className="text-right">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={handleSubmit}
            >
              Create
            </button>
            <button
              onClick={handleClose}
              type="button"
              className="ml-2 border px-4 py-2 rounded hover:bg-gray-100"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
