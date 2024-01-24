import styles from './css/Card.module.css'
import lpdnc from '../image/projects/lpdnc.svg'
import portifolio from '../image/projects/portifolio.svg'
import ButtonB from './ButtonB'

function Card({img, title, tech, description, repo, site}) {
    return(
        <div className = {styles.card}>
            <a href={site}><img src={img}/></a>
            <section>
                <h3>{title}</h3>
                <p><strong>Tecnologia</strong>{tech}</p>
                <p>{description}</p>
                <ButtonB link={repo} text ='Acesse o repositório!'/>
            </section>
        </div>
    )
}

export default Card