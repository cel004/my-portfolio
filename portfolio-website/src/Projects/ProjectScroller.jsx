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
        <h3>Project Name</h3>
            <p className={styles.projectDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et felis nec ligula bibendum placerat. In consectetur neque at erat tincidunt, ac tempor dolor tristique.
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
