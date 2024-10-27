import { LineMdEmail } from './assets/iconEmail';
import { LineMdLinkedin } from './assets/iconLinkedin';
import { LineMdGithub } from './assets/iconGithub';

function Header(){

    return(
        <header>
            <nav>
                <ul>
                    
                    <li><a href = "home">home</a></li>
                    <li><a href = "projects">projects</a></li>
                    <li><a href = "contact">contact</a></li>

                    <div className='contact-icons'>
                        <li><a href="linkedin"></a><LineMdLinkedin/ ></li>
                        <li><a href="github"></a><LineMdGithub/ ></li>
                    </div>
                </ul>
            </nav>

            <div className = "title">
                <h1>Hi! I'm Celina!</h1>
                <p>self-taught software developer</p>
            </div>
            
                <a href="mailto:name@gmail.com">
                <LineMdEmail />
                <div id = "email">name@gmail.com</div>
                </a>
            
        </header>
    )
}

export default Header