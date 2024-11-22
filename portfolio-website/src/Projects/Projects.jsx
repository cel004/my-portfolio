import React, { useEffect, useRef } from 'react';
import styles from './Projects.module.css';
import placeholderImage from '../assets/placeholder.svg';

function Projects() {
    const galleryRef = useRef(null);

    useEffect(() => {
        const gallery = galleryRef.current;
        if (!gallery) return;

        gallery.setAttribute("data-animated", "true");
        const galleryInner = gallery.querySelector(`.${styles.galleryList}`);
        
        // Clone images to create infinite scrolling effect
        if (galleryInner) {
            const images = Array.from(galleryInner.children);
            images.forEach(item => {
                const clone = item.cloneNode(true);
                clone.setAttribute("aria-hidden", "true");
                galleryInner.appendChild(clone); // Add clones after the originals
            });
        }

        return () => {
            gallery.removeAttribute("data-animated");
            const clonedImages = galleryInner ? galleryInner.querySelectorAll('[aria-hidden="true"]') : [];
            clonedImages.forEach(clone => clone.remove());
        };
    }, []);

    return (
        <div className={styles.projectContainer}>
            <h2>Projects</h2>
            <div className={styles.projectCard}>
                <h3>Project Name</h3>
                <p className={styles.projectDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et felis nec ligula bibendum placerat. In consectetur neque at erat tincidunt, ac tempor dolor tristique.
                </p>
            </div>
            <div className={styles.gallery} ref={galleryRef}>
                <div className={styles.galleryList}>
                    <img src={placeholderImage} alt="project screenshot 1" />
                    <img src={placeholderImage} alt="project screenshot 2" />
                    <img src={placeholderImage} alt="project screenshot 3" />
                    {/* Add more images here if needed */}
                </div>
            </div>
        </div>
    );
}

export default Projects;
