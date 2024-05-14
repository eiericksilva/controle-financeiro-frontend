import Button from "../components/button/button";

export default function Category() {
  const incomeCategories = [
    {
      id: 1,
      name: "Category 1",
      categoryType: "INCOME",
      subcategories: [
        {
          id: 1,
          name: "Subcategory 1.1",
        },
        {
          id: 2,
          name: "Subcategory 1.2",
        },
        {
          id: 3,
          name: "Subcategory 1.3",
        },
      ],
    },
    {
      id: 2,
      name: "Category 2",
      categoryType: "INCOME",
      subcategories: [
        {
          id: 1,
          name: "Subcategory 2.1",
        },
        {
          id: 2,
          name: "Subcategory 2.2",
        },
      ],
    },
    {
      id: 3,
      name: "Category 3",
      categoryType: "INCOME",
      subcategories: [
        {
          id: 1,
          name: "Subcategory 3.1",
        },
        {
          id: 2,
          name: "Subcategory 3.2",
        },
        {
          id: 3,
          name: "Subcategory 3.3",
        },
        {
          id: 2,
          name: "Subcategory 3.4",
        },
      ],
    },
    {
      id: 4,
      name: "Category 3",
      categoryType: "INCOME",
      subcategories: [
        {
          id: 1,
          name: "Subcategory 3.1",
        },
        {
          id: 2,
          name: "Subcategory 3.2",
        },
        {
          id: 3,
          name: "Subcategory 3.3",
        },
        {
          id: 2,
          name: "Subcategory 3.4",
        },
      ],
    },
    {
      id: 5,
      name: "Category 3",
      categoryType: "INCOME",
      subcategories: [
        {
          id: 1,
          name: "Subcategory 3.1",
        },
        {
          id: 2,
          name: "Subcategory 3.2",
        },
        {
          id: 3,
          name: "Subcategory 3.3",
        },
        {
          id: 2,
          name: "Subcategory 3.4",
        },
      ],
    },
  ];
  const expenseCategories = [
    {
      id: 1,
      name: "Category 1",
      categoryType: "EXPENSE",
      subcategories: [
        {
          id: 1,
          name: "Subcategory 1.1",
        },
        {
          id: 2,
          name: "Subcategory 1.2",
        },
        {
          id: 3,
          name: "Subcategory 1.3",
        },
      ],
    },
    {
      id: 2,
      name: "Category 2",
      categoryType: "EXPENSE",
      subcategories: [
        {
          id: 1,
          name: "Subcategory 2.1",
        },
        {
          id: 2,
          name: "Subcategory 2.2",
        },
      ],
    },
    {
      id: 3,
      name: "Category 3",
      categoryType: "EXPENSE",
      subcategories: [
        {
          id: 1,
          name: "Subcategory 3.1",
        },
        {
          id: 2,
          name: "Subcategory 3.2",
        },
        {
          id: 3,
          name: "Subcategory 3.3",
        },
        {
          id: 2,
          name: "Subcategory 3.4",
        },
      ],
    },
  ];

  return (
    <div>
      <header className="flex justify-between ">
        <h1 className="text-3xl pb-4">Category Query</h1>
        <Button title="New Category" className="text-sm bg-amber-500" />
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
