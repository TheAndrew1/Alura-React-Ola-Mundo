import styles from "./Banner.module.css"
import circuloColorido from "assets/circulo_colorido.png"

export default function Banner() { 
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá Mundo!
                </h1>
                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou André Mai Velasco, aluno de Front-end da Alura.
                </p>
            </div>
            <div className={styles.imagens}>
                <img  className={styles.circuloColorido} src={circuloColorido} aria-hidden={true} alt="Imagem fundo foto"/>
                <img  className={styles.minhaFoto} src="https://avatars.githubusercontent.com/u/102202764?v=4" alt="Foto de perfil" />
            </div>
        </div>
    )
}