import { FlowbiteCssSolid } from '../assets/Skill/iconCSS';
import { FlowbiteHtmlSolid } from '../assets/Skill/iconHTML';
import { MdiReact } from '../assets/Skill/iconReact';
import { LineiconsJavascript } from '../assets/Skill/iconJS';

const duplicateIcons = [...icons, ...icons];

function Scroll(){
    const icons = [
                <li key = "css"><FlowbiteCssSolid /></li>,
                <li key = "html "><FlowbiteHtmlSolid /></li>,
                <li key = "react "><MdiReact /></li>,
                <li key = "js "><LineiconsJavascript /></li>
    ];
    return (
        <div className = "scroller">
            <ul className = "scrollList">
                {duplicateIcons}
            </ul>

        </div>
    );
}

export default Scroll;