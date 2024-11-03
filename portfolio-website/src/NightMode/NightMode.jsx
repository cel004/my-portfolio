import React, { useState } from 'react';
import styles from './NightMode.module.css'

const NightMode = () => {
    const [isNightMode, setIsNightMode] = useState(false);

    const toggleNightMode = () => {
        setIsNightMode((prev) => !prev);
        document.body.classList.toggle('night-mode', !isNightMode);
    };

    return(
    <button className={styles.button} onClick={toggleNightMode}>
        {isNightMode ? 'Sun' : 'Moon'} </button>
        );
}

export default NightMode