import { IconType } from "react-icons/lib";
import styles from "./Button.module.css"

type props = {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    icon?: IconType
}

const Button = ({ label, onClick, disabled, outline, small, icon: Icon }: props) => {
    return (
        <button className={`${styles.button} ${outline} ? ${styles.outline} : ${styles.no_outline}  ${small} ? ${styles.small} : ${styles.no_small}`}
            onClick={onClick}
            disabled={disabled ? true : false}
        >
            {Icon && <Icon size={24} />}
            {label}
        </button>
    )
}

export default Button