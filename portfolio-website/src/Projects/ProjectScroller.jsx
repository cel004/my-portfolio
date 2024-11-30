import React, { useEffect, useRef } from 'react';
import styles from './ProjectScroller.module.css';
import Projects from './Projects.jsx';

import { FlowbiteCssSolid } from '../assets/Skill/iconCSS';
import { FlowbiteHtmlSolid } from '../assets/Skill/iconHTML';
import { MdiReact } from '../assets/Skill/iconReact';
import { LineiconsJavascript } from '../assets/Skill/iconJS';
import { MingcuteLinuxFill } from '../assets/Skill/iconLinux';
import { MdiGit } from '../assets/Skill/iconGit';
import { DeviconPlainCsharp } from '../assets/Skill/iconCSharp';
import { TablerBrandMysql } from '../assets/Skill/iconMySQL';
import { Chartjs } from '../assets/Skill/iconChartJS';

function ProjectScroller() {
    return (
	<>
	<h2>Projects</h2>
    <div className={styles.projectCard}>
        <div className={styles.projectTitle}>
            <h3>Fruitful</h3>
            <div className={styles.projectSkills}>
                <FlowbiteCssSolid/><FlowbiteHtmlSolid/><MdiReact/><TablerBrandMysql/><Chartjs/>
            </div>
        </div>
            <p className={styles.projectDescription}>
            A full-stack budgeting app that allows users 
            to track and manage finances with secure data storage.
            </p>
        </div>
        <div className={styles.scroller}>
            <div className={styles.galleryList}>
                <Projects />
            </div>
        </div>
</>
    );
}

export default ProjectScroller;
