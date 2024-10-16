import { useEffect, useState } from "react";
import Button from "../components/button/button";
import Tag from "../components/tag/tag";
import CreateTagModal from "../components/modals/createTagModal/createTagModal";
import { api } from "../services/axios";
import { AiOutlinePlus } from "react-icons/ai";

export default function Tags() {
  const [tags, setTags] = useState([]);
  const [isTagModalOpen, setIsTagModalOpen] = useState(false); // Estado para controlar o modal

  const refreshTags = () => {
    api
      .get("/tags")
      .then((res) => setTags(res.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    refreshTags();
  }, []);

  return (
    <div className="p-6 bg-gray-50 shadow-lg rounded-lg">
      {/* Modal de criação de Tag */}
      <CreateTagModal
        isOpen={isTagModalOpen}
        setIsOpen={setIsTagModalOpen}
        refreshTags={refreshTags}
      />

      {/* Cabeçalho */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-black">Tags</h1>
        <Button title="Criar Tag" onClick={() => setIsTagModalOpen(true)}>
          <AiOutlinePlus className="text-lg" />
        </Button>
      </header>

      <hr className="border-gray-300 mb-6" />

      <div className="flex flex-wrap gap-2">
        {tags.length > 0 ? (
          tags.map((tag) => (
            <Tag key={tag.id} color={tag.color} name={tag.name} />
          ))
        ) : (
          <p className="text-gray-500 text-center w-full">
            No tags available. Please add a new tag.
          </p>
        )}
      </div>
    </div>
  );
}
