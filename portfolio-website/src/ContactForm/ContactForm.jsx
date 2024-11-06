import styles from './ContactForm.module.css';
function ContactForm(){
    return(
        <div className = {styles.titleContainer}>
            <div className = {styles.title}>
                <h2>contact me!</h2>
                <h3>let's make something special</h3>
            </div>
        </div>
    );

}

export default ContactForm;