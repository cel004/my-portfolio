import React, { useEffect, useRef } from 'react';
import styles from './Projects.module.css';
import placeholderImage from '../assets/placeholder.svg';

function Projects(){
    const galleryRef = useRef(null);

    return(
        <div className={styles.projectContainer}>
        <div className={styles.gallery}>
            <div className={styles.galleryList}>
                <img src={placeholderImage} alt="project screenshot 1" />
                <img src={placeholderImage} alt="project screenshot 2" />
                <img src={placeholderImage} alt="project screenshot 3" />
            </div>
        </div>
    </div>
    );
}

export default Projects;
