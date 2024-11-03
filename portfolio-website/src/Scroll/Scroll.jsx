import React from 'react';
import styles from './Scroll.module.css'

import { FlowbiteCssSolid } from '../assets/Skill/iconCSS';
import { FlowbiteHtmlSolid } from '../assets/Skill/iconHTML';
import { MdiReact } from '../assets/Skill/iconReact';
import { LineiconsJavascript } from '../assets/Skill/iconJS';


function Scroll(){
    const icons = [
                <li key = "css"><FlowbiteCssSolid /></li>,
                <li key = "html"><FlowbiteHtmlSolid /></li>,
                <li key = "react"><MdiReact /></li>,
                <li key = "js"><LineiconsJavascript /></li>
    ];
    
    const duplicateIcons = [
        ...icons.map((icon, index) => React.cloneElement(icon, { key: `icon-${index}` })),
        ...icons.map((icon, index) => React.cloneElement(icon, { key: `icon-dup-${index}` })),
    ];

    return (
        <div className = {styles.scroller}>
            <ul className = {styles.scrollList}>
                {duplicateIcons}
            </ul>
        </div>
    );
}

export default Scroll;