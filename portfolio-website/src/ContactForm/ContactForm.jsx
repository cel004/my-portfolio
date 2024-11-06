import { useState } from 'react';
import ReactDOM from 'react-dom/client';

import styles from './ContactForm.module.css';
function ContactForm(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [textarea, setTextarea] = useState(
        "The content of a textarea goes in the value attribute"
      );

    const handleChange = (event) => {
    setTextarea(event.target.value)
    }

    return(
        <div className = {styles.titleContainer}>
            <div className = {styles.title}>
                <h2>contact me!</h2>
                <h3>let's make something special</h3>
                <form>
                    <label>Name:
                        <input type="text" value={ name } onChange={(e) => setName(e.target.value)}/>
                    </label>
                    <label>Email:
                        <input type="text" value={ email } onChange={(e) => setEmail(e.target.value)}/>
                    </label>
                    <label>Message:
                        <input type="text" value={ textarea } onChange={(e) => setTextarea(e.target.value)}/>
                    </label>
                </form>
            </div>
        </div>
    );

}

export default ContactForm;