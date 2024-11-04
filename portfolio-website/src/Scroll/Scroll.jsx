import React, { useEffect, useRef } from 'react';
import styles from './Scroll.module.css';

import { FlowbiteCssSolid } from '../assets/Skill/iconCSS';
import { FlowbiteHtmlSolid } from '../assets/Skill/iconHTML';
import { MdiReact } from '../assets/Skill/iconReact';
import { LineiconsJavascript } from '../assets/Skill/iconJS';

function Scroll() {
    const scrollerRef = useRef(null);

    useEffect(() => {
        // checks for reduced motion preference
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation();
        }

        function addAnimation() {
            const scroller = scrollerRef.current;

            if (scroller) {
                scroller.setAttribute("data-animated", "true");

                const scrollerInner = scroller.querySelector(`.${styles.scrollList}`);
                const scrollerContent = Array.from(scrollerInner.children);

                // clone each item then append to inner scroller
                scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true);
                    duplicatedItem.setAttribute("aria-hidden", true);
                    scrollerInner.appendChild(duplicatedItem);
                });
            }
        }

        return () => {
            const scroller = scrollerRef.current;
            if (scroller) {
                scroller.removeAttribute("data-animated");
            }
        };
    }, []);

    const icons = [
        { Component: FlowbiteCssSolid, alt: "CSS" },
        { Component: FlowbiteHtmlSolid, alt: "HTML" },
        { Component: MdiReact, alt: "React" },
        { Component: LineiconsJavascript, alt: "JavaScript" }
    ];

    return (
        <div className={styles.scroller} ref={scrollerRef}>
            <ul className={styles.scrollList}>
                {icons.map(({ Component, alt }, index) => (
                    <li key={`icon-${index}`}>
                        <Component aria-label={alt} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Scroll;
