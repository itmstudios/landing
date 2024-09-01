import styles from './styles.module.css';

interface CloseButtonProps {
    onClose: () => void;
}

export const CloseButton: React.FC<CloseButtonProps>  = ({onClose}) => {
    return (
        <button className={styles.closeButton} onClick={onClose} aria-label="Close"></button>
    )
}