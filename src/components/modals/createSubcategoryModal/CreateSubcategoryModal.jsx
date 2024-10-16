import { useState } from "react";
import Button from "../../button/button";
import { api } from "../../../services/axios";
import { toast } from "react-toastify";

const CreateSubcategoryModal = ({
  isOpen,
  onClose,
  onCreateSubcategory,
  categoryId,
}) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      name,
    };

    api
      .post(`/categories/${categoryId}/subcategories`, payload)
      .then((res) => {
        onCreateSubcategory();
        toast.success("Subcategoria criada com sucesso!");
        onClose();
      })
      .catch((error) => {
        console.error("Erro ao criar subcategoria:", error);
        toast.error("Não foi possível criar a subcategoria.");
      });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-10">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Criar Subcategoria</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Nome da Subcategoria
            </label>
            <input
              type="text"
              className="mt-1 h-10 p-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-end gap-2">
            <Button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
              title="Criar"
            />
            <Button
              type="button"
              className="px-4 py-2 bg-red-500 hover:bg-red-600"
              onClick={onClose}
              title="Cancelar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateSubcategoryModal;
