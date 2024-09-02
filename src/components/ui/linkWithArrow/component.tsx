import React from 'react';
import styles from './styles.module.css';
import Link from 'next/link';
import { Arrow } from '@/components/icons/components';
import { inter } from '@/app/fonts';
import classNames from 'classnames';

interface LinkWithArrowProps {
    text: string;
    variant?: 'left' | 'right';
    href: string;
    onClick?: () => void;
}

export const LinkWithArrow: React.FC<LinkWithArrowProps> = ({ text, variant = 'right', href, onClick }) => {
    return (
        <div className={classNames(styles.root, {
            [styles.left]: variant === 'left',
            [styles.right]: variant === 'right',
        })} onClick={onClick}>
            <Link href={href} className={inter.className}>{text}</Link>
            <Arrow className={styles.arrow} />
        </div>
    );
};
