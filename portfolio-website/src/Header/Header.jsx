import styles from './Header.module.css'

import { LineMdEmail } from '../assets/Contact/iconEmail';
import { LineMdLinkedin } from '../assets/Contact/iconLinkedin';
import { LineMdGithub } from '../assets/Contact/iconGithub';

function Header(){

    return(
        <header>

            <div className = {styles.title}>
                <h1>Hi! I'm Celina!</h1>
                <p>self-taught software developer</p>
            </div>
            
            <div className = {styles.sectionEmail}>
                
                <div id = {styles.email}>celsnguyen@gmail.com</div>
                <ul className = {styles.contacts}>
                    <li><a href="#" className = "linkedinButton"></a><LineMdLinkedin /></li>
                    <li><a href="mailto:#@gmail.com"></a><LineMdEmail /></li>
                    <li><a href="#"></a><LineMdGithub /></li>
                </ul>
            </div>
                
            
        </header>
    )
}

export default Header