import { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './ContactForm.module.css';

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [textarea, setTextarea] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const submitButton = (event) => {
        event.preventDefault();

        // Validate form fields
        if (!name || !email || !textarea) {
            setErrorMessage("All fields are required.");
            return;
        }

        const templateParams = {
            form_name: name,
            form_email: email,
            message: textarea
        };

        emailjs
            .send(
                'service_4tj4an1',  // service ID
                'template_eepgyy8',  // template ID
                templateParams,
                'SqGJaUE2LOJKp6jrw'   // user ID from emailJS
            )
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setErrorMessage("Thank you for your message! I'll get back to you shortly."); 
                    setName("");  
                    setEmail("");  
                    setTextarea("");  // Clears all fields
                },
                (error) => {
                    console.log('FAILED...', error);
                    setErrorMessage("Something went wrong. Please try again.");
                }
            );
    };

    return (
        <div className={styles.titleContainer}>
            <div className={styles.title}>
                <h2>Get in touch</h2>
                <p className={styles.subTitle}>Let's make something special</p>
            </div>
            <div className={styles.formContainer}>
                <form onSubmit={submitButton}>
                    <label>Name:
                        <input 
                            type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required 
                        />
                    </label>
                    <label>Email:
                        <input 
                            type="text" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </label>
                    <label>Message:
                        <textarea 
                            value={textarea} 
                            onChange={(e) => setTextarea(e.target.value)} 
                            required 
                        />
                    </label>
                    {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
                    <input type="submit" value="Submit" />
                </form>
            </div>       
        </div>
    );
}

export default ContactForm;
