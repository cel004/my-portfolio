import styles from './Footer.module.css'

function Footer(){

    return(
        <>
        <hr></hr>
        <p className ={styles.copyright}>&copy; {new Date().getFullYear()} Celina Nguyen</p>
        </>

    )

}

export default Footer 
