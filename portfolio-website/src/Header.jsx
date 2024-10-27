import { LineMdEmail } from './assets/iconEmail';
import { LineMdLinkedin } from './assets/iconLinkedin';
import { LineMdGithub } from './assets/iconGithub';

function Header(){

    return(
        <header>
            <nav>
                  <div className = "headerNav">
                    <ul className = "centerNav">
                        <li><a href = "home">home</a></li>
                        <li><a href = "projects">projects</a></li>
                        <li><a href = "contact">contact</a></li>
                    </ul>
                    </div>
                    
            </nav>

            <div className="circle-container">
                <div className="circle" />
            </div>

            <div className = "title">
                <h1>Hi! I'm Celina!</h1>
                <p>self-taught software developer</p>
            </div>
            
            <div className = "section-email">
                
                <div id = "email">name@gmail.com</div>
                <ul>
                    <li><a href="mailto:name@gmail.com"></a><LineMdEmail /></li>
                    <li><a href="linkedin"></a><LineMdLinkedin /></li>
                    <li><a href="github"></a><LineMdGithub /></li>
                </ul>
            </div>
                
            
        </header>
    )
}

export default Header