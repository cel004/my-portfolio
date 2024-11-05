import styles from './Projects.module.css'
import placeholderImage from '../assets/placeholder.svg'


function Projects(){
    return(
        <div className = {styles.projectContainer}>
            <h2>Projects</h2>
            <div className = {styles.projectCard}>
                <p>Project Name</p>
                <p className = {styles.projectDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et felis nec ligula bibendum placerat. In consectetur neque at erat tincidunt, ac tempor dolor tristique.
                </p>
            </div>
            <div className = {styles.gallery}>
                <img src = { placeholderImage } alt = 'placeholder' />
                <img src = { placeholderImage } alt = 'placeholder' />
                <img src = { placeholderImage } alt = 'placeholder' />
            </div>
            

        </div>
    );
}

export default Projects;