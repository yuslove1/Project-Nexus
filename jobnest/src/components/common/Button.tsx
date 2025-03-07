import { ButtonProps } from "@/types/interfaces";

const Button = ({btnStyle,btnText,onBtnClick} : ButtonProps) => {
    return(
        <button className={btnStyle} onClick={onBtnClick}>
            {btnText}
        </button>
    )
    
}

export {Button};