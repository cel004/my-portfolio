import React, { useEffect, useRef } from 'react';
import styles from './Scroll.module.css';

import { FlowbiteCssSolid } from '../assets/Skill/iconCSS';
import { FlowbiteHtmlSolid } from '../assets/Skill/iconHTML';
import { MdiReact } from '../assets/Skill/iconReact';
import { LineiconsJavascript } from '../assets/Skill/iconJS';
import { MingcuteLinuxFill } from '../assets/Skill/iconLinux';
import { MdiGit } from '../assets/Skill/iconGit';

const icons = [
    { Component: FlowbiteCssSolid, alt: "CSS" },
    { Component: FlowbiteHtmlSolid, alt: "HTML" },
    { Component: MdiReact, alt: "React" },
    { Component: LineiconsJavascript, alt: "JavaScript" },
    { Component: MingcuteLinuxFill, alt: "Linux" },
    { Component: MdiGit, alt: "Git" }
];

function Scroll() {
    const scrollerRef = useRef(null);

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const scroller = scrollerRef.current;
        if (!scroller) return;

        scroller.setAttribute("data-animated", "true");
        const scrollerInner = scroller.querySelector(`.${styles.scrollList}`);
        
        Array.from(scrollerInner.children).forEach(item => {
            const clone = item.cloneNode(true);
            clone.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(clone);
        });

        return () => scroller.removeAttribute("data-animated");
    }, []);

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