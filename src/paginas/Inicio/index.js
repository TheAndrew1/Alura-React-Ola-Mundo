import Banner from "componentes/Banner";
import styles from "./Inicio.module.css"
import posts from "assets/json/posts.json"
import Post from "componentes/Post";

export default function Inicio() {
    return (
        <main>
            <Banner />
            <ul className={styles.posts}>
                {posts.map((post) => (
                    <Post key={post.id} post={post} />
                ))}
            </ul>
        </main>
    )
}