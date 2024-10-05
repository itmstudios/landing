import React from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './styles.module.css';

interface PersonCardProps {
    photo: StaticImageData;
    role: string;
    name: string;
}

const PersonCard: React.FC<PersonCardProps> = ({ photo, role, name }) => {
    return (
        <div>
            <div className={styles.photo_container}>
                <Image src={photo} alt={`${name}'s photo`} className={styles.person_photo} />
            </div>
            <p className={styles.person_role}>{role}</p>
            <p className={styles.person_name}>{name}</p>
        </div>
    );
};

export default PersonCard;
