export interface ButtonProps{
    btnStyle: string;
    btnText: string;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    onBtnClick?: (e: MouseEventHandler<HTMLButtonElement>) => void | React.ReactElement;
  }
  