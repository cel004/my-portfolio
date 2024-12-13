import React, { useState } from 'react';
import styles from './NightMode.module.css'

import { LineMdMoonRisingAltLoop } from '../assets/iconMoon';
import { LineMdSunRisingLoop } from '../assets/iconSun';

const NightMode = ({ isNightMode, setIsNightMode }) => {
    const toggleNightMode = () => {
      setIsNightMode(!isNightMode); // Toggle the state
      console.log("Toggling night mode:", !isNightMode);
    };

    return(
    <button className={styles.button} onClick={toggleNightMode}>
        {isNightMode ? <LineMdSunRisingLoop /> : <LineMdMoonRisingAltLoop />} </button>
        );
}

export default NightMode