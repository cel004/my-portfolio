import styles from './Aura.module.css'

const Aura = () => {
    return (
        <div className = {styles.circleContainer}>
            <div id="up" className = {styles.animatedCircle}></div>
            <div id="down" className = {styles.animatedCircle}></div>
            <div id="left" className = {styles.animatedCircle}></div>
            <div id="right" className = {styles.animatedCircle}></div>
            <div className= {styles.circle}></div>
        </div>
    );
};

export default Aura;