import { useEffect, useState } from "react";
import Button from "../components/button/button";
import Tag from "../components/tag/tag";
import { api } from "../services/axios";
import { AiOutlinePlus } from "react-icons/ai";

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
        <h1 className="text-3xl py-4">Tag Query</h1>
        <Button title="New Tag" className="text-sm">
          <AiOutlinePlus />
        </Button>
      </header>
      <hr className="" />
      <ul className="flex">
        {tags && tags.map((tag) => <Tag key={tag.id} name={tag.name} />)}
      </ul>
    </div>
  );
}
