import Button from "../components/button/button";
import Tag from "../components/tag/tag";

export default function Tags() {
  const tags = [
    {
      id: 1,
      name: "Tag A",
    },
    {
      id: 2,
      name: "Tag B",
    },
    {
      id: 3,
      name: "Tag C",
    },
    {
      id: 4,
      name: "Tag D",
    },
    {
      id: 5,
      name: "Alimentação",
    },
    {
      id: 6,
      name: "helicoptero",
    },
  ];

  return (
    <div>
      <header className="flex justify-between">
        <h1 className="text-3xl pb-4">Tag Query</h1>
        <Button title="New Tag" className="text-sm bg-amber-500" />
      </header>
      <hr className="my-4" />
      <ul className="flex">
        {tags && tags.map((tag) => <Tag key={tag.id} name={tag.name} />)}
      </ul>
    </div>
  );
}
