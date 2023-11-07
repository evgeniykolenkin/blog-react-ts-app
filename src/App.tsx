import "./App.css";
import { useState, useEffect } from "react";
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
  const [postsList, setPostsList] = useState<Array<PostListType>>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPostsList(data))
      .catch((error) => console.log(error));
  }, []);

  const addNewPost = (postTitle: string, postBody: string) => {
    const parseDate = () => {
      const date = new Date();
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const fullYear = date.getFullYear().toString();
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      const seconds = date.getSeconds().toString().padStart(2, "0");
      return `Дата: ${day}.${month}.${fullYear} ${hours}:${minutes}:${seconds}`;
    };
    const newPost = {
      userId: parseDate(),
      id: uuidv4(),
      title: postTitle,
      body: postBody,
    };

    setPostsList([newPost, ...postsList]);
  };

  const deletePostHandler = (id: string | number) => {
    setPostsList(postsList.filter((post) => post.id !== id));
  };

  return (
    <div className="app">
      <InputsArea addNewPost={addNewPost} />
      <PostsArea posts={postsList} deletePostHandler={deletePostHandler} />
    </div>
  );
}

export default App;
