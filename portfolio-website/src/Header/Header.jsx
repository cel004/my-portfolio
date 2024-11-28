import styles from './Header.module.css'
import Scroll from '../Scroll/Scroll.jsx'

import { LineMdLinkedin } from '../assets/Contact/iconLinkedin';
import { LineMdGithub } from '../assets/Contact/iconGithub';

function Header(){

    return(
        <header>
            <div className = {styles.title}>
                <div className={styles.nameContainer}>
                <div className={styles.name}><p>Celina Nguyen</p></div>
                <div className={styles.phonetics}><p><em>| səˈliːnə ŋwiən˦ˀ˥ |</em></p></div>
            </div>
                <div className={styles.descriptionHeader}>
                    <p>software developer</p>
                    <div id = {styles.contacts}><p>celnguyens@gmail.com</p>
                        <div className = {styles.socialIcons}>
                        <div className = {styles.socialIconsContainer}>
                            <a href="https://www.linkedin.com/in/cel-nguyen/" target="_blank"  rel="noopener noreferrer"><LineMdLinkedin /></a>
                            <div className={styles.githubkitty}><a href="https://github.com/cel004" target="_blank"  rel="noopener noreferrer"><LineMdGithub /></a></div>
                        </div>
                        </div>
                    </div>
                </div>
                <Scroll/>
                <div className={styles.aboutMe}>
                    
                    <p className ={styles.aboutMe1}>I’m a self-taught developer 
                    specializing in building & designing software applications—and everything in between.</p>
                    
                    <p className ={styles.aboutMe1}>I put my heart into every project, making sure everything
                    is <span style={{fontStyle: "italic"}}>juuuuust</span> right.</p>
                </div>
            </div>
        </header>
    )
}

export default Header