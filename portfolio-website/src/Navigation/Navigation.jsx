import styles from './Navigation.module.css'

function Navigation(){
    return(
    <nav>
        <ol className = {styles.centerNav}>
            <li><a href = "#">HOME</a></li>
            <li><a href = "#">PROJECTS</a></li>
            <li><a href = "#">CONTACT ✧˖° ⊹ ࣪ ˖</a></li>
        </ol>
        </nav>
    )
}

export default Navigation

