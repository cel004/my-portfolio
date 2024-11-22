import styles from './Navigation.module.css'

function Navigation(){
    return(
    <nav>
        <ol className = {styles.centerNav}>
            <li><a href = "#section1">Home</a></li>
            <li><a href = "#section2">Projects</a></li>
            <li><a href = "#section3">Contact</a></li>
        </ol>
        </nav>
    )
}

export default Navigation

