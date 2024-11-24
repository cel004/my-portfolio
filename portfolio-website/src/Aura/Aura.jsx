import React from 'react';
import styles from './Aura.module.css';

function Aura() {
    return (
        <div className={styles.auraWrapper}>
            <div className={styles.circleContainer}>
                <div className={styles.auraLayer1}></div>
                <div className={styles.auraLayer2}></div>
                <div className={styles.auraLayer3}></div>
                <div className={styles.auraLayer4}></div>
                <div className={styles.auraLayer5}></div>
                <div className={styles.shimmer}></div>
            </div>
        </div>
    );
}

export default Aura;