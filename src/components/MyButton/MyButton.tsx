import "./MyButton.css";
import { Button } from "@mui/material";
import { LibraryAdd } from "@mui/icons-material";

export type ButtonPropsType = {
  postTitle: string;
  postBody: string;
  addNewPost: () => void;
  clearInputs: () => void;
  disabled: boolean;
};

export function MyButton(props: ButtonPropsType) {
  return (
    <div>
      <Button
        className="add__btn"
        variant="contained"
        onClick={props.addNewPost}
        endIcon={<LibraryAdd />}
        disabled={props.disabled}
      >
        Добавить пост
      </Button>
    </div>
  );
}
