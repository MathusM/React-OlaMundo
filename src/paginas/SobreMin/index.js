import PostModelo from "componentes/PostModelo"
import fotoCapa from "assets/sobre_mim_capa.png"
import styles from './SobreMin.module.css'
import fotoSobreMim from 'assets/sobre_mim_foto.jpg'

export default function SobreMin () {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo= "Sobre min"
        >
            <h3 className={styles.subtitulo}>
                    Olá, eu sou Matheus
            </h3>

            <img 
                src={fotoSobreMim}
                alt="Foto de Matheus"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Sou tecnico de Informatica pelo projeto Trilhas do Futuro de Minas Gerais, e estou atualmente cursando na Alura no seu
                projeto Alura + Oracle o ONE
            </p>

            <p className={styles.paragrafo}>
                Gosto muito da area e me interreso muito pelo mundo da Programação e Desenvolvimento, por hora, escolhi me dedicar a
                area de Front-End, mas futuramente, irei buscar conhecer a area do Back-End, assim, quero me tornar Full-Stack e dominar
                varias Linguagens de Programação
            </p>

            <p className={styles.paragrafo}>
                Na area de Programação atualmente, tenho conhecimento em três linguagens na area do Front-End, HTML, CSS e JavaScript, e
                estou no momento estudando sobre o React!
                E tudo novo para min, mesmo assim, estou aprendendo e indo em frente!
            </p>
        </PostModelo>
    )
}