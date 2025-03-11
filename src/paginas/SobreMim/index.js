import styles from './SobreMim.module.css';
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/foto_perfil.jpg";

export default function SobreMim() {
    return (
        <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
            <h3 className={styles.subtitulo}>
                Olá, sou o André!
            </h3>
            <img src={fotoSobreMim} alt="Foto sobre mim" className={styles.fotoSobreMim}/>
            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a pulvinar nunc. Donec blandit erat urna, in gravida velit rhoncus ac. Suspendisse lacinia pulvinar aliquet. Mauris viverra maximus dictum. Aliquam a mattis ante. Maecenas gravida auctor dolor. Suspendisse lacinia est ut tincidunt auctor. Curabitur efficitur, ante sed fermentum elementum, lacus orci volutpat lorem, ac interdum mauris est vel magna. Integer odio lectus, maximus sodales rhoncus eget, ultrices sodales sapien. Aenean imperdiet ullamcorper arcu, vel molestie nulla. Aenean convallis tempus sem, ac tristique ipsum dictum sit amet. Aenean dui augue, placerat in finibus et, dignissim et magna. Nulla facilisi.
            </p>
            <p className={styles.paragrafo}>
                Vestibulum faucibus quam elementum, lacinia ligula vestibulum, vulputate diam. Curabitur a dolor dictum, hendrerit neque tristique, laoreet diam. In hac habitasse platea dictumst. Duis vel erat et turpis sagittis vestibulum. Duis ut dolor sed mi pellentesque posuere et eu massa. Sed vulputate purus sit amet aliquet ornare. Aliquam erat volutpat.
            </p>
            <p className={styles.paragrafo}>
                Sed laoreet posuere porta. Mauris hendrerit nisl in ipsum suscipit cursus non nec metus. Etiam condimentum mollis dui, nec maximus elit dapibus laoreet. Quisque porttitor lacinia mi, ut porta tortor molestie sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis ac nulla elit. Quisque eu nulla nec mi feugiat posuere id non nisi. Donec in lacus eget quam placerat porttitor non vitae mauris.
            </p>
            <p className={styles.paragrafo}>
                Fusce ac nisi id ligula venenatis cursus. In ac nibh finibus, dapibus nulla vel, bibendum felis. In auctor nulla at semper euismod. Praesent non porta sapien. Praesent pretium purus diam, quis fringilla metus vulputate congue. Mauris mattis eu enim vitae viverra. Maecenas sed sem nec nisi lobortis varius. Donec porttitor viverra elit, non efficitur nunc pretium id. Curabitur maximus nec purus vel vulputate. Nam nec eros et dolor venenatis lacinia placerat in sem. Sed aliquam aliquam nibh, ut feugiat eros dictum in. Nunc et congue elit, at tristique ipsum. Sed ultrices eros id odio congue, sollicitudin molestie lacus semper. Etiam odio orci, ultrices id malesuada quis, aliquam in arcu.
            </p>
            <p className={styles.paragrafo}>
                Ut bibendum ultrices arcu, quis dictum velit fringilla eget. Mauris in consectetur est. Donec pulvinar, nunc eget sagittis vehicula, purus ipsum dignissim orci, ac blandit lectus ex eget lectus. Vivamus augue ligula, maximus id feugiat sit amet, luctus sed ipsum. Pellentesque accumsan justo vel velit lacinia, id condimentum arcu tincidunt. Aenean varius dictum varius. Curabitur efficitur fringilla magna, ac hendrerit nibh efficitur id. Morbi in urna lectus.
            </p>
            <p className={styles.paragrafo}>
                Quisque at dui hendrerit, pellentesque orci vitae, consectetur sem. Maecenas mauris tortor, egestas id maximus sit amet, ullamcorper id ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam non odio lacus. Donec vehicula ante vel nisi venenatis, ut rhoncus libero placerat. Sed in fermentum est. In iaculis pharetra massa, a volutpat lacus aliquet et. Curabitur convallis vitae ipsum vitae iaculis. Sed pulvinar vulputate rutrum. Pellentesque dapibus nulla ut lacus tincidunt tempor. Proin dui augue, iaculis vitae laoreet semper, placerat non enim.
            </p>
        </PostModelo>
    )
}