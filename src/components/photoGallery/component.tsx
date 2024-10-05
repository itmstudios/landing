
import Photo2 from '../../../public/assets/photo/Photo2.jpg';
import Photo3 from '../../../public/assets/photo/Photo3.jpg';
import Photo4 from '../../../public/assets/photo/Photo4.png';
import Photo5 from '../../../public/assets/photo/Photo5.png';

import React from 'react';
import styles from './styles.module.css';
import PersonCard from '../personCard/component';

const PhotoGallery: React.FC = () => {
    const people = [
        { photo: Photo2, role: "Software Development", name: "PAVEL BURNS" },
        { photo: Photo3, role: "Creative & Design", name: "GIUZEL SABEROVA" },
        { photo: Photo4, role: "Management & Analytics", name: "DMITRIY KOROLEV" },
        { photo: Photo5, role: "Marketing & Production", name: "SHAMIL" },
    ];
    return (
        <div className={styles.root}>
            {people.map((person, index) => (
                <div key={index} className={styles.photo_container}>
                    <PersonCard photo={person.photo} role={person.role} name={person.name} />
                </div>
            ))}

        </div>
    );
};

export default PhotoGallery;


