import { FlowbiteCssSolid } from '../assets/Skill/iconCSS';
import { FlowbiteHtmlSolid } from '../assets/Skill/iconHTML';
import { MdiReact } from '../assets/Skill/iconReact';
import { LineiconsJavascript } from '../assets/Skill/iconJS';


function Scroll(){
    return(
        <div className = "scroller">
            <ul className = "scrollList">
                <li><FlowbiteCssSolid /></li>
                <li><FlowbiteHtmlSolid /></li>
                <li><MdiReact /></li>
                <li><LineiconsJavascript /></li>
            </ul>    
        </div>
    );
}

export default Scroll