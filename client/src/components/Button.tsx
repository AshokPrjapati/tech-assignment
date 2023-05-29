import { IconType } from "react-icons/lib";
import styles from "../styles/Button.module.css";

type props = {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
  selectedOem?: string;
};

const Button = ({ label, onClick, disabled, icon: Icon }: props) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      disabled={disabled ? true : false}
    >
      {Icon && <Icon size={24} />}
      {label}
    </button>
  );
};

export default Button;
