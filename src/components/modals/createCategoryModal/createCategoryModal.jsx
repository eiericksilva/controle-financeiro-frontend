import { useState } from "react";
import Button from "../../button/button";
import { api } from "../../../services/axios";

const CreateCategoryModal = ({ isOpen, onClose, onCreateCategory }) => {
  const [name, setName] = useState("");
  const [categoryType, setCategoryType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      name,
      categoryType,
    };

    api
      .post("/categories", payload)
      .then((res) => {
        onCreateCategory();
        console.log(res);
        onClose();
      })
      .catch((error) => console.log(error));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-10">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Create New Category</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              className="mt-1 h-10 p-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Category Type
            </label>
            <select
              className="h-10 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              value={categoryType}
              onChange={(e) => setCategoryType(e.target.value)}
              required
            >
              <option value="">Select Category Type</option>
              <option value="INCOME">Income</option>
              <option value="EXPENSE">Expense</option>
            </select>
          </div>

          <div className="flex justify-end gap-2">
            <Button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
              title="Create"
              isOpen={false}
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

export default CreateCategoryModal;
