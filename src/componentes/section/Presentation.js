import styles from './css/Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import {useEffect, useState} from 'react'

function Presentation() {
    const [text, setText] = useState('');
    const toRotate = [' eu sou Matheus Santos!', 'Desenvolvedor Full-Stack', 'Linguagens de dominio', 'React, HTML, CSS, JavaScript, PHP, Laravel'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(100);


    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
        }, delta)
        return()=>{clearInterval(ticker)}

    }, [text])

    const toType = () =>{
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1)

        setText(updatedText);

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1)
        }
    }

    return (
        <div className = {styles.presentation} id="Presentation">
            <h4><strong>Bem-vindo ao meu Portifólio</strong></h4>
            <h1>Olá, {text}</h1>
            <p>
                Estou cursando Engenharia de Software no Centro Universitário Leonardo da Vinci (Uniasselvi).<br/>
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