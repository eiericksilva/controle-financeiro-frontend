import { useEffect, useState } from "react";
import Button from "../components/button/button";
import Tag from "../components/tag/tag";
import { api } from "../services/axios";

export default function Tags() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    api
      .get("/tags")
      .then((res) => setTags(res.data))
      .catch((error) => console.log(error));
  }, []);

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
