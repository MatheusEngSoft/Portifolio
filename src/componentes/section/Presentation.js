import styles from './css/Presentation.module.css'
import ButtonA from '../elements/ButtonA'

function Presentation() {
    return (
        <div className = {styles.presentation} id="Presentation">
            <h4><strong>Bem-vindo ao meu Portifólio</strong></h4>
            <h1>Olá, eu sou Matheus Santos!</h1>
            <p>
                Sou estudando de Engenheiro de Software no Centro Universitário Leonardo da Vinci (Uniasselvi).<br/>
                Ao longo da minha jornada pude me envolver em projetos e desenvolvimento de paginas web.<br/>
                Quero construir minha carreira com o proposito de criar programas e paginas para facilitar manuseio<br/>
                e a administração das suas empresas.<br/>
                Atualmente estou estudando alem da faculdade, cursos online como a DNC com foco em desenvolvimento da WEB<br/>
                como fullstack. Tendo como foco as tecnologias, HTML, CSS, JavaScript. E realizando um projeto particular em PHP, usando o framework Laravel.
            </p>
            <ButtonA link='https://www.instagram.com/joaopedro3936/?hl=pt-br' text='Conecte-se comigo!'/>
        </div>
    )
}

export default Presentation