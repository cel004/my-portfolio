import React, { useEffect, useRef } from 'react';
import styles from './ProjectScroller.module.css';
import Projects from './Projects.jsx';

function ProjectScroller() {
    const galleryRef = useRef(null);

    useEffect(() => {
        const scroller = galleryRef.current;
        if (!scroller) return;

        scroller.setAttribute("data-animated", "true");
        const scrollerInner = scroller.querySelector(`.${styles.galleryList}`);
        
        Array.from(scrollerInner.children).forEach(item => {
            const clone = item.cloneNode(true);
            scrollerInner.appendChild(clone);
        });
        return () => scroller.removeAttribute("data-animated");
    }, []);

    return (
	<>
	<h2>Projects</h2>
    <div className={styles.projectCard}>
        <h3>Fruitful</h3>
            <p className={styles.projectDescription}>
            A full-stack budgeting app that allows users 
            to track and manage finances with secure data storage.
            </p>
        </div>
        <div className={styles.scroller} ref={galleryRef}>
            <div className={styles.galleryList}>
                <Projects />
            </div>
        </div>
</>
    );
}

export default ProjectScroller;
