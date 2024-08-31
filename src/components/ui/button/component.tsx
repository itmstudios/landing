import React from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';

interface ButtonProps {
    onClick: () => void;
    text: string;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({ onClick, text, type = 'button', className }) => {
    return (
        <button className={classNames(className,styles.button)} onClick={onClick} type={type}>
            {text}
        </button>
    );
};
