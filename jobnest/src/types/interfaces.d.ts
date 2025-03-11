export interface ButtonProps{
    btnStyle: string;
    btnText: string;
    onBtnClick?: (id?: string | number ) => void | string | React.ReactElement;
  }
  