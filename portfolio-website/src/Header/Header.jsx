import styles from './Header.module.css'

import { LineMdEmail } from '../assets/iconEmail';
import { LineMdLinkedin } from '../assets/iconLinkedin';
import { LineMdGithub } from '../assets/iconGithub';

function Header(){

    return(
        <header>

            <div className = "title">
                <h1>Hi! I'm Celina!</h1>
                <p></p>
            </div>
            
            <div className = "section-email">
                
                <div id = "email">celsnguyen@gmail.com</div>
                <ul className = "contacts">
                    <li><a href="#"></a><LineMdLinkedin /></li>
                    <li><a href="mailto:#@gmail.com"></a><LineMdEmail /></li>
                    <li><a href="#"></a><LineMdGithub /></li>
                </ul>
            </div>
                
            
        </header>
    )
}

export default Header