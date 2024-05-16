import { useState } from "react";
import Button from "../components/button/button";
import { useEffect } from "react";
import { api } from "../services/axios";
import { AiOutlinePlus } from "react-icons/ai";

export default function Category() {
  const [incomeCategories, setIncomeCategories] = useState([]);
  const [expenseCategories, setExpenseCategories] = useState([]);

  useEffect(() => {
    api
      .get("/categories")
      .then((res) => {
        const income = res.data.filter(
          (category) => category.categoryType === "INCOME"
        );
        const expense = res.data.filter(
          (category) => category.categoryType === "EXPENSE"
        );

        setIncomeCategories(income);
        setExpenseCategories(expense);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <header className="flex justify-between ">
        <h1 className="text-3xl py-4">Category Query</h1>
        <Button title="New Category">
          <AiOutlinePlus />
        </Button>
      </header>
      <hr className="my-4" />
      <div className="flex justify-between gap-1 ">
        <div className="w-[50%] rounded-md p-4 shadow-lg">
          <h1 className="text-2xl pb-4">Income</h1>
          <hr className="mb-2 border border-gray-100" />

          {incomeCategories ? (
            incomeCategories.map((category) => (
              <ul key={category.id}>
                {category.name}
                {category.subcategories.map((subcategory) => (
                  <li className="ml-10 py-2 list-disc" key={subcategory.id}>
                    {subcategory.name}
                  </li>
                ))}
              </ul>
            ))
          ) : (
            <span> There are no Income Categories registered yet</span>
          )}
        </div>
        <div className="  w-[50%]  shadow-lg rounded-md p-4">
          <h1 className="text-2xl pb-4">Expense</h1>
          <hr className="mb-2 border border-gray-100" />
          {expenseCategories ? (
            expenseCategories.map((category) => (
              <ul key={category.id}>
                {category.name}
                {category.subcategories.map((subcategory) => (
                  <li className="ml-10 py-2 list-disc" key={subcategory.id}>
                    {subcategory.name}
                  </li>
                ))}
              </ul>
            ))
          ) : (
            <span> There are no Income Categories registered yet</span>
          )}
        </div>
      </div>
    </div>
  );
}
