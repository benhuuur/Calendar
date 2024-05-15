import style from "./Input.module.css"

interface InputProps {
    placeholder: string;
    type?: string;  
}

export const Input = ({ placeholder, type = 'text' }: InputProps) => {
  return (
    <input type={type} className={style["input"]} placeholder={placeholder} />
  );
};
