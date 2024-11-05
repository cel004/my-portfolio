import styles from './Navigation.module.css'

function Navigation(){
    return(
    <nav>
        <ol className = {styles.centerNav}>
            <li><a href = "#">home</a></li>
            <li><a href = "#">projects</a></li>
            <li><a href = "#">contact ✧˖° ⊹ ࣪ ˖</a></li>
        </ol>
        </nav>
    )
}

export default Navigation

