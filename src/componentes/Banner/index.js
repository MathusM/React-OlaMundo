import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.jpeg'

export default function Banner () {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Olá todo bem? Meu nome e Matheus Marques, e sou desenvolvedor Front-End, atualmente cursando na Alura e
                    Técnico em Informática, tenho 19 anos, e estou estudando muito para ser um novo Desenvolvedor!
                </p>
            </div>
                
                <div className={styles.imagens}>
                    <img 
                        className={styles.circuloColorido}
                        src={circuloColorido} 
                        aria-hidden={true}
                        alt='Not Important'
                    />

                    <img 
                        className={styles.minhaFoto}
                        src={minhaFoto}
                        alt='Minha Foto'
                    />

                </div>

                
            </div>

    )
}