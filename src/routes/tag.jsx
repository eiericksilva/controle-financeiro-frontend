export default function Tag() {
  const tag = {
    id: 1,
    name: "Tag A",
  };

  return (
    <div id="transaction">
      <div>
        <h1 className="text-3xl pb-4">Tag Query</h1>
        <hr />
        <ul>
          <li>{tag.id}</li>
          <li>{tag.name}</li>
        </ul>
      </div>
    </div>
  );
}
