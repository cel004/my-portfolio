import styles from './UpArrow.module.css';
import { UpArrowIcon } from './iconUpArrow.jsx';


function UpArrow(){
    return(
        <nav>
            <a href = "#section1" className={styles.upArrow}>
                <UpArrowIcon />
            </a>
        </nav>
    )
}

export default UpArrow;