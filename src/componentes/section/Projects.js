import styles from './css/Projects.module.css'
import ButtonB from '../elements/ButtonB'
import Card from '../elements/Card'
import lpdnc from '../image/projects/lpdnc.svg'
import portifolio from '../image/projects/portifolio.svg'

function Projects() {
    return (
        <div className = {styles.projects} id="Projects">
            <h1>Projetos</h1>
            <Card
            img={lpdnc}
            title="LP - DNC"
            tech="HTML, CSS e JS"
            description="Desenvolvimento de uma Landing Page para o lançamento da formação em tecnologia"
            repo="https://github.com/MatheusEngSoft/projeto-landing-page"
            site="https://minha-primeira-landing-page.netlify.app/"
            />
            <Card
            img={portifolio}
            title="Portifolio"
            tech="HTML, CSS, React"
            description="Desenvolvimento de um Portifolio usando a tecnologia React"
            repo="https://github.com/MatheusEngSoft/projeto-landing-page"
            site="https://minha-primeira-landing-page.netlify.app/"
            />
            <div className= {styles.centerButton}>
                <ButtonB link='https://github.com/MatheusEngSoft' text='Ver repositório Completo' className={styles.btnB}/>
            </div>
        </div>
    )
}

export default Projects