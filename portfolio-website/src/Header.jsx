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
            <h1>hi! i'm celina!</h1>
            <p>self-taught software developer</p>
            <a href="mailto:name@gmail.com">
                <LineMdEmail></LineMdEmail>
                name@gmail.com
            </a>
        </header>
    )
}

export default Header