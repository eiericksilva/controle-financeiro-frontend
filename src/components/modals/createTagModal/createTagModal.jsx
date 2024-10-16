import { useState } from "react";
import Button from "../../button/button";
import { api } from "../../../services/axios";
import { toast } from "react-toastify";

const CreateTagModal = ({ isOpen, setIsOpen, refreshTags }) => {
  const [tagName, setTagName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!tagName) {
      toast.error("Tag name cannot be empty");
      return;
    }

    // API request to create a new tag
    api
      .post("/tags", { name: tagName })
      .then((res) => {
        toast.success("Tag criada com sucesso!");
        refreshTags();
        setIsOpen(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Falha ao criar a Tag");
      });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-10">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">Criação de nova Tag</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Nome
            </label>
            <input
              type="text"
              className="p-1 mt-1 h-10 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              value={tagName}
              onChange={(e) => setTagName(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
              title="Create"
            />
            <Button
              type="button"
              className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
              onClick={() => setIsOpen(false)}
              title="Cancel"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTagModal;
