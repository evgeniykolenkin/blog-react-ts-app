import { TextField } from "@mui/material";
import "./InputText.css";

type ColorType =
  | "secondary"
  | "error"
  | "primary"
  | "info"
  | "success"
  | "warning";

type PropsInputTextType = {
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
    <div className="input__text">
      <TextField
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
