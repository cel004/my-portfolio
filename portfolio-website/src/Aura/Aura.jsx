import React from 'react';
import styles from './Aura.module.css';

function Aura() {
    return (
        <div className={styles.auraWrapper}>
            <div className={styles.circleContainer}>
                <div className={styles.auraEffect}>
                    <div className={styles.auraLayer}></div>
                </div>
                <div className={styles.circle}></div>
                <div className={styles.shimmer}></div>
            </div>
        </div>
    );
}

export default Aura;