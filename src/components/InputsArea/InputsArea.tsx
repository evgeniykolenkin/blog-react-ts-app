import "./InputsArea.css";
import { InputText } from "../InputText/InputText";
import { Button } from "../Button/Button";
import { useState } from "react";

// https://jsonplaceholder.typicode.com/posts

export type NewPostPropsType = {
  addNewPost: (postTitle: string, postBody: string) => void;
};

export function InputsArea(props: NewPostPropsType) {
  const [inputTitle, setInputTitle] = useState("");
  const [inputText, setInputText] = useState("");

  const onChangeInputTitleHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputTitle(e.target.value);
  };

  const onChangeInputTextHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputText(e.target.value);
  };

  const clearInputs = () => {
    setInputTitle("");
    setInputText("");
  };

  return (
    <div className="inputs__area">
      <h2>Новый пост</h2>
      <InputText
        value={inputTitle}
        onChange={onChangeInputTitleHandler}
        label={"Заголовок"}
        multiline
        rows={2}
        color={"primary"}
      />
      <InputText
        value={inputText}
        onChange={onChangeInputTextHandler}
        label={"Текст поста"}
        multiline
        rows={4}
        color={"primary"}
      />
      <Button
        clearInputs={clearInputs}
        addNewPost={props.addNewPost}
        postTitle={inputTitle}
        postBody={inputText}
      />
    </div>
  );
}
