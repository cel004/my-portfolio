import styles from './Footer.module.css'

function Footer(){

    return(
        <>
        <p className ={styles.copyright}>&copy; {new Date().getFullYear()} Celina Nguyen</p>
        </>

    )

}

export default Footer 
