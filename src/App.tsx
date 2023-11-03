// import { useState } from "react";
import { useState } from "react";
import "./App.css";
import { InputsArea } from "./components/InputsArea/InputsArea";
import { PostsArea } from "./components/PostsArea/PostsArea";
import { v4 as uuidv4 } from "uuid";

export type PostListType = {
  userId: number | string;
  id: number | string;
  title: string;
  body: string;
};

function App() {
  const [postsList, setPostsList] = useState<Array<PostListType>>([
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
  ]);

  // const [postDate, setPostDate] = useState<number | string>(1);

  const addNewPost = (postTitle: string, postBody: string) => {
    const parseDate = () => {
      const date = new Date();
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const fullYear = date.getFullYear().toString();
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      const seconds = date.getSeconds().toString().padStart(2, "0");
      return `
          Дата: ${day}.${month}.${fullYear} ${hours}:${minutes}:${seconds}
        `;
    };

    const newPost = {
      userId: parseDate(),
      id: uuidv4(),
      title: postTitle,
      body: postBody,
    };

    setPostsList([...postsList, newPost]);
  };

  return (
    <div className="app">
      <InputsArea addNewPost={addNewPost} />
      <PostsArea posts={postsList} />
    </div>
  );
}

export default App;
