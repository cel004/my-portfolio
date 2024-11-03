import React, { useEffect, useRef } from 'react';
import styles from './Scroll.module.css'

import { FlowbiteCssSolid } from '../assets/Skill/iconCSS';
import { FlowbiteHtmlSolid } from '../assets/Skill/iconHTML';
import { MdiReact } from '../assets/Skill/iconReact';
import { LineiconsJavascript } from '../assets/Skill/iconJS';

function Scroll() {
    const scrollerRef = useRef(null);

    useEffect(() => {
        if (scrollerRef.current) {
            scrollerRef.current.setAttribute('data-animated', 'true');
        }
    }, []);

    const icons = [
        { Component: FlowbiteCssSolid, alt: "CSS" },
        { Component: FlowbiteHtmlSolid, alt: "HTML" },
        { Component: MdiReact, alt: "React" },
        { Component: LineiconsJavascript, alt: "JavaScript" }
    ];

    const duplicateIcons = [...icons, ...icons];

    return (
        <div className={styles.scroller} ref={scrollerRef}>
            <ul className={styles.scrollList}>
                {duplicateIcons.map(({ Component, alt }, index) => (
                    <li key={`icon-${index}`}>
                        <Component aria-label={alt} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Scroll;