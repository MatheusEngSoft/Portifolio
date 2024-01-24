import styles from './css/Navbar.module.css'
import { FaInstagram, FaLinkedin, FaGithub }  from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';

function Navbar() {
    return (
        <div className = {styles.navbar}>
            <ul>
                <li><Nav.Link href='#Presentation'>Apresentação</Nav.Link></li>
                <li><Nav.Link href='#Skills'>Habilidades</Nav.Link></li>
                <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
            </ul>
            <ul>
                <a href='https://www.instagram.com/joaopedro3936/?hl=pt-br'><li className = {styles.instagram}><FaInstagram size = {30}/></li></a>
                <a href='https://www.linkedin.com/in/matheus-santos-736909290/'><li className = {styles.linkedin}><FaLinkedin size = {30}/></li></a>
                <a href='https://github.com/MatheusEngSoft'><li><FaGithub size = {30}/></li></a>
            </ul>
        </div>
    )
}

export default Navbar