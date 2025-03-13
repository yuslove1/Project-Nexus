export interface ButtonProps{
    btnStyle: string;
    btnText: string;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    onBtnClick?: (e: React.FormEvent<HTMLFormElement>) => void | React.ReactElement;
  }
  