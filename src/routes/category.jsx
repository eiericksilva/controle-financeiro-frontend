export default function Category() {
  const category = {
    id: 1,
    name: "Category A",
    categoryType: "INCOME",
    /*       subcategories: "lista de Subcategorias", */
  };

  return (
    <div id="transaction">
      <div>
        <h1 className="text-3xl pb-4">Category Query</h1>
        <hr />
        <ul>
          <li>{category.id}</li>
          <li>{category.name}</li>
          <li>{category.categoryType}</li>
          {/*           <li>{category.subcategories}</li> */}
        </ul>
      </div>
    </div>
  );
}
