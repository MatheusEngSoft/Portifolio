import styles from './css/Footer.module.css'
import { FaInstagram, FaLinkedin, FaGithub }  from "react-icons/fa";

function Footer() {
    return (
        <div className= {styles.footer}>
            <ul>
                <li><a href='https://www.instagram.com/joaopedro3936/?hl=pt-br'><FaInstagram size = {30}/></a></li>
                <li><a href='https://www.linkedin.com/in/matheus-santos-736909290/'><FaLinkedin size = {30}/></a></li>
                <li><a href='https://github.com/MatheusEngSoft'><FaGithub size = {30}/></a></li>
            </ul>
            <div className= {styles.divText}>
                <p>matheus.engsof@gmail.com</p><br/>
                <p> Matheus Santos © 2024 </p>
            </div>
        </div>
    )
}

export default Footer