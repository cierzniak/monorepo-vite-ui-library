import { FC, ReactNode } from "react";
import clsx from "clsx";
import styles from "./button.module.scss";

export type ButtonProps = {
  children: ReactNode;
  type?: 'primary' | 'secondary' | 'warning' | 'error' | 'info';
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, type = 'primary', onClick = () => {} }) => (
    <button className={clsx({
      [styles.button]: true,
      [styles.button__secondary]: type == 'secondary',
      [styles.button__warning]: type == 'warning',
      [styles.button__error]: type == 'error',
      [styles.button__info]: type == 'info',
    })} onClick={onClick}>
      {children}
    </button>
);

export default Button;
