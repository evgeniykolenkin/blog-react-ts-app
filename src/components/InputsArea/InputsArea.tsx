import "./InputsArea.css";
import { InputText } from "../InputText/InputText";
import { MyButton } from "../MyButton/MyButton";
import { useEffect, useState } from "react";
import { Alert, Snackbar } from "@mui/material";

export type NewPostPropsType = {
  addNewPost: (postTitle: string, postBody: string) => void;
};

export function InputsArea(props: NewPostPropsType) {
  const [inputTitle, setInputTitle] = useState("");
  const [inputText, setInputText] = useState("");
  const [isError, setIsError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [openTitleWarning, setOpenTitleWarning] = useState(false);
  const [openTextWarning, setOpenTextWarning] = useState(false);

  useEffect(() => {
    if (inputTitle.length > 30) {
      setOpenTitleWarning(true);
      setIsError(true);
      setIsDisabled(true);
    } else if (inputText.length > 200) {
      setOpenTextWarning(true);
      setIsError(true);
      setIsDisabled(true);
    } else {
      setIsError(false);
      setOpenTitleWarning(false);
      setOpenTextWarning(false);
      setIsDisabled(false);
    }
  }, [inputTitle, inputText]);

  const onChangeInputTitleHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputTitle(e.target.value);
    setIsError(false);
  };

  const onChangeInputTextHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputText(e.target.value);
    setIsError(false);
  };

  const clearInputs = () => {
    setInputTitle("");
    setInputText("");
  };

  const handleClose = (event: string | React.SyntheticEvent | Event) => {
    if (event === "clickaway") {
      return;
    }
    setOpenSuccess(false);
    setOpenError(false);
    setOpenTitleWarning(false);
    setOpenTextWarning(false);
  };

  const addNewPostHandler = () => {
    if (inputTitle.trim() && inputText.trim()) {
      props.addNewPost(inputTitle, inputText);
      clearInputs();
      setOpenSuccess(true);
      setIsError(false);
    } else {
      setOpenError(true);
      setIsError(true);
    }
  };

  return (
    <div className="inputs__area">
      <h2>Новый пост</h2>
      <InputText
        error={isError}
        value={inputTitle}
        onChange={onChangeInputTitleHandler}
        label={"Заголовок"}
        multiline
        rows={2}
        color={"info"}
      />
      <InputText
        error={isError}
        value={inputText}
        onChange={onChangeInputTextHandler}
        label={"Текст"}
        multiline
        rows={4}
        color={"info"}
      />
      <MyButton
        disabled={isDisabled}
        clearInputs={clearInputs}
        addNewPost={addNewPostHandler}
        postTitle={inputTitle}
        postBody={inputText}
      />
      <div className="snack__bars">
        <Snackbar
          open={openSuccess}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Пост добавлен
          </Alert>
        </Snackbar>
        <Snackbar
          open={openError}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            Поля обязательны
          </Alert>
        </Snackbar>
        <Snackbar
          open={openTitleWarning}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="warning"
            sx={{ width: "100%" }}
          >
            Превышен лимит символов заголовка {inputTitle.length}/30
          </Alert>
        </Snackbar>
        <Snackbar
          open={openTextWarning}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="warning"
            sx={{ width: "100%" }}
          >
            Превышен лимит символов текста {inputText.length}/200
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
}
