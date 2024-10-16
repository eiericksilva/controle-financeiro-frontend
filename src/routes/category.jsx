import { useState, useEffect, useRef } from "react";
import Button from "../components/button/button";
import CreateCategoryModal from "../components/modals/createCategoryModal/createCategoryModal";
import CreateSubcategoryModal from "../components/modals/createSubcategoryModal/CreateSubcategoryModal"; // Importe o modal de subcategoria
import { api } from "../services/axios";
import { AiOutlinePlus } from "react-icons/ai";
import { CiTrash } from "react-icons/ci";
import { SlOptionsVertical } from "react-icons/sl";
import { LuDot } from "react-icons/lu";

class Node {
  constructor(name, id, type, next = null, subcategories = null) {
    this.name = name;
    this.id = id;
    this.type = type;
    this.next = next;
    this.subcategories = subcategories;
  }
}

export default function Category() {
  const [incomeCategoryHead, setIncomeCategoryHead] = useState(null);
  const [expenseCategoryHead, setExpenseCategoryHead] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [subcategoryModalIsOpen, setSubcategoryModalIsOpen] = useState(false);

  const [currentCategoryId, setCurrentCategoryId] = useState(null);
  const [optionsMenu, setOptionsMenu] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOptionsMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const deleteCategory = (categoryId) => {
    api
      .delete(`/categories/${categoryId}`)
      .then(() => {
        fetchCategories();
      })
      .catch((error) => {
        console.log("Erro ao deletar categoria:", error);
      });
  };

  const deleteSubcategory = (categoryId, subcategoryId) => {
    api
      .delete(`/categories/${categoryId}/subcategories/${subcategoryId}`)
      .then(() => {
        fetchCategories();
      })
      .catch((error) => {
        console.log("Erro ao deletar subcategoria:", error);
      });
  };

  const fetchCategories = () => {
    api
      .get("/categories")
      .then((res) => {
        const incomeCategories = res.data.filter(
          (category) => category.categoryType === "INCOME"
        );
        const expenseCategories = res.data.filter(
          (category) => category.categoryType === "EXPENSE"
        );

        setIncomeCategoryHead(
          createCategoryLinkedList(incomeCategories, "income")
        );
        setExpenseCategoryHead(
          createCategoryLinkedList(expenseCategories, "expense")
        );
      })
      .catch((error) => console.log(error));
  };

  const createCategoryLinkedList = (categories, type) => {
    let head = null;
    let previousNode = null;

    categories.forEach((category) => {
      const subcategoryHead = createSubcategoryLinkedList(
        category.subcategories
      );

      const newNode = new Node(
        category.name,
        category.id,
        type,
        null,
        subcategoryHead
      );
      if (!head) {
        head = newNode;
      } else {
        previousNode.next = newNode;
      }
      previousNode = newNode;
    });

    return head;
  };

  const createSubcategoryLinkedList = (subcategories) => {
    let head = null;
    let previousNode = null;

    subcategories.forEach((subcategory) => {
      const newNode = new Node(subcategory.name, subcategory.id, null);
      if (!head) {
        head = newNode;
      } else {
        previousNode.next = newNode;
      }
      previousNode = newNode;
    });

    return head;
  };

  const handleMenuToggle = (categoryId) => {
    setOptionsMenu((prev) => (prev === categoryId ? null : categoryId));
  };

  const handleCreateSubcategory = (categoryId) => {
    setOptionsMenu(false);
    setCurrentCategoryId(categoryId);
    setSubcategoryModalIsOpen(true);
  };

  const renderCategories = (categoryHead) => {
    let currentCategory = categoryHead;
    const rows = [];

    while (currentCategory) {
      const categoryId = currentCategory.id;
      const categoryName = currentCategory.name;

      rows.push(
        <tr key={categoryId} className="hover:bg-blue-50 transition-colors">
          <td className="px-6 py-4 whitespace-nowrap font-medium text-black  flex items-center">
            <LuDot /> {categoryName}
          </td>
          <td className="px-6 py-4 text-right relative">
            <SlOptionsVertical
              className="cursor-pointer align-bottom ml-auto"
              onClick={() => handleMenuToggle(categoryId)}
            />
            {optionsMenu === categoryId && (
              <div
                ref={menuRef}
                className="absolute right-0 mt-2 w-48 bg-white shadow-lg border rounded-md z-50"
                style={{ transform: "translateY(-100%)", marginBottom: "8px" }}
              >
                <ul>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => deleteCategory(categoryId)}
                  >
                    Excluir
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => console.log("Editar categoria", categoryId)}
                  >
                    Editar
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleCreateSubcategory(categoryId)}
                  >
                    Criar Subcategoria
                  </li>
                </ul>
              </div>
            )}
          </td>
        </tr>
      );

      const subcategories = renderSubcategories(
        currentCategory.subcategories,
        categoryId
      );
      rows.push(
        <tr key={`subcategories-${categoryId}`}>
          <td className="px-6 py-2 pl-8">{subcategories}</td>
        </tr>
      );

      currentCategory = currentCategory.next;
    }

    return rows;
  };

  const renderSubcategories = (subcategoryHead, categoryId) => {
    let currentSubcategory = subcategoryHead;
    let subcategoryId = currentSubcategory?.id;
    const subcategoryElements = [];

    while (currentSubcategory) {
      subcategoryElements.push(
        <li key={subcategoryId} className="flex justify-between ">
          <span className="flex items-center mb-2">
            <LuDot /> {currentSubcategory.name}
          </span>
          <CiTrash
            className="cursor-pointer align-bottom"
            onClick={() => deleteSubcategory(categoryId, subcategoryId)}
          />
        </li>
      );
      currentSubcategory = currentSubcategory.next;
    }

    return (
      <ul className="list-disc list-inside pl-4">
        {subcategoryElements.length > 0 ? (
          subcategoryElements
        ) : (
          <li>No subcategories</li>
        )}
      </ul>
    );
  };

  return (
    <>
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-black">
          Categoria e Subcategoria
        </h1>
        <Button title="Criar Categoria" onClick={() => setModalIsOpen(true)}>
          <AiOutlinePlus className="text-lg" />
        </Button>
      </header>
      <div className="flex justify-between overflow-x-auto shadow-md sm:rounded-lg">
        <div className="w-1/2 pr-2">
          <header className="flex justify-between items-center mb-6 p-4 bg-white border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-800">Receitas</h1>
          </header>

          <table className="min-w-full text-left text-sm border border-gray-300">
            <thead className="bg-blue-500 text-xs uppercase text-white">
              <tr>
                <th className="px-6 py-3">Categoria</th>
                <th className="px-6 py-3 text-right">Opções</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {incomeCategoryHead ? (
                renderCategories(incomeCategoryHead)
              ) : (
                <tr>
                  <td
                    colSpan="2"
                    className="px-6 py-4 text-center text-gray-500"
                  >
                    Não há categoria de Receitas registradas
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="w-1/2 pl-2">
          <header className="flex justify-between items-center mb-6 p-4 bg-white border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-800">Despesas</h1>
          </header>

          <table className="min-w-full text-left text-sm border border-gray-300">
            <thead className="bg-blue-500 text-xs uppercase text-white ">
              <tr>
                <th className="px-6 py-3">Categoria</th>
                <th className="px-6 py-3 text-right">Opções</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {expenseCategoryHead ? (
                renderCategories(expenseCategoryHead)
              ) : (
                <tr>
                  <td
                    colSpan="2"
                    className="px-6 py-4 text-center text-gray-500 "
                  >
                    Não há categorias de Despesa registradas
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {modalIsOpen && (
        <CreateCategoryModal
          isOpen={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
          onCreateCategory={fetchCategories}
        />
      )}

      {subcategoryModalIsOpen && (
        <CreateSubcategoryModal
          isOpen={subcategoryModalIsOpen}
          onClose={() => setSubcategoryModalIsOpen(false)}
          onCreateSubcategory={() => {
            fetchCategories(); // Atualiza as categorias após criar a subcategoria
            setCurrentCategoryId(null); // Reseta o ID da categoria atual
          }}
          categoryId={currentCategoryId} // Passa o ID da categoria
        />
      )}
    </>
  );
}
