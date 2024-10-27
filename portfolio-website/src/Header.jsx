import { LineMdEmail } from './assets/iconEmail';

function Header(){

    return(
        <header>
            <nav>
                <ul>
                    <li><a href = "home">home</a></li>
                    <li><a href = "projects">projects</a></li>
                    <li><a href = "contact">contact</a></li>
                </ul>
            </nav>

            <div className ="title">
                <h1>Hi! I'm Celina!</h1>
                <p>self-taught software developer</p>
            </div>
            <a href="mailto:name@gmail.com">
                <LineMdEmail></LineMdEmail>
                name@gmail.com
            </a>
        </header>
    )
}

export default Header