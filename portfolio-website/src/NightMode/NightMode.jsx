import React, { useState } from 'react';
import styles from './NightMode.module.css'

import { LineMdMoonRisingAltLoop } from '../assets/iconMoon';
import { LineMdSunRisingLoop } from '../assets/iconSun';

const NightMode = () => {
    const [isNightMode, setIsNightMode] = useState(false);

    const toggleNightMode = () => {
        setIsNightMode((prev) => !prev);
        document.body.classList.toggle('night-mode', !isNightMode);
    };

    return(
    <button className={styles.button} onClick={toggleNightMode}>
        {isNightMode ? <LineMdSunRisingLoop /> : <LineMdMoonRisingAltLoop />} </button>
        );
}

export default NightMode