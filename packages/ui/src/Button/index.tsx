import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './button.module.scss';

export type ButtonProps = {
  children: ReactNode;
  type?: 'primary' | 'secondary' | 'warning' | 'error' | 'info';
  onClick?: () => void;
};

const Button: FC<ButtonProps> = ({ children, type = 'primary', onClick = undefined }) => (
  <button
    className={clsx({
      [styles.button]: true,
      [styles.button__secondary]: 'secondary' === type,
      [styles.button__warning]: 'warning' === type,
      [styles.button__error]: 'error' === type,
      [styles.button__info]: 'info' === type,
    })}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
