import styles from './css/Skills.module.css'
import javascript from '../../componentes/image/skills/javascript.svg'
import html from '../../componentes/image/skills/html.svg'
import css from '../../componentes/image/skills/css.svg'
import react from '../../componentes/image/skills/react.svg'

function Skills() {
    return (
        <div className = {styles.skill} id="Skills">
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
            <div>
                <img src={javascript}/>
                <img src={html}/>
                <img src={css}/>
                <img src={react}/>
            </div>
        </div>
    )
}

export default Skills