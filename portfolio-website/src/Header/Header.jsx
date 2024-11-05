import styles from './Header.module.css'

import { LineMdEmail } from '../assets/Contact/iconEmail';
import { LineMdLinkedin } from '../assets/Contact/iconLinkedin';
import { LineMdGithub } from '../assets/Contact/iconGithub';

function Header(){

    return(
        <header>

            <div className = {styles.title}>
                <h1>Hi! I'm Celina!</h1>
                <p>software developer</p>
                <div id = {styles.contacts}>celsnguyen@gmail.com
                    <div className = {styles.socialIcons}>
                        <a href="#"></a><LineMdLinkedin />
                        <a href="mailto:#@gmail.com"></a><LineMdEmail />
                        <a href="#"></a><LineMdGithub />
                    </div>
                </div>
            </div>
            
            {/* <div className = {styles.sectionEmail}>
                
                
            </div> */}
                
            
        </header>
    )
}

export default Header