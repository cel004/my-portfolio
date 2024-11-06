import styles from './Header.module.css'

import { LineMdLinkedin } from '../assets/Contact/iconLinkedin';
import { LineMdGithub } from '../assets/Contact/iconGithub';

function Header(){

    return(
        <header>
            <div className = {styles.title}>
                <h1>Hi! I'm Celina!</h1>
                <p>Software developer</p>
                <div id = {styles.contacts}>celsnguyen@gmail.com
                    <div className = {styles.socialIcons}>
                        <div className = {styles.socialIconsContainer}>
                            <a href="https://www.linkedin.com/in/cel-nguyen/" target="_blank"  rel="noopener noreferrer"><LineMdLinkedin /></a>
                            <a href="https://github.com/cel004" target="_blank"  rel="noopener noreferrer"><LineMdGithub /></a>   
                        </div>
                    </div>
                </div>
            </div>
            
            {/* <div className = {styles.sectionEmail}>
                
                
            </div> */}
                
            
        </header>
    )
}

export default Header