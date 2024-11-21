import styles from './Navigation.module.css'

function Navigation(){
    return(
    <nav>
        <ol className = {styles.centerNav}>
            <li><a href = "#section1">HOME</a></li>
            <li><a href = "#section2">PROJECTS</a></li>
            <li><a href = "#section3">CONTACT</a></li>
        </ol>
        </nav>
    )
}

export default Navigation

