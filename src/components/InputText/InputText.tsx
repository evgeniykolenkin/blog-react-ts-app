import "./InputText.css";
import { TextField } from "@mui/material";

type ColorType =
  | "secondary"
  | "error"
  | "primary"
  | "info"
  | "success"
  | "warning";

type PropsInputTextType = {
  error: boolean;
  value: string;
  label: string;
  multiline: boolean;
  rows: number;
  color: ColorType;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

export function InputText(props: PropsInputTextType) {
  return (
    <div className={"input__text"}>
      <TextField
        error={props.error}
        onChange={props.onChange}
        value={props.value}
        label={props.label}
        multiline
        rows={props.rows}
        color={props.color}
      />
    </div>
  );
}
