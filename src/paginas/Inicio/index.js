import styles from "./Inicio.module.css"
import posts from "assets/json/posts.json"
import PostCard from "componentes/PostCard";

export default function Inicio() {
    return (
        <main>
            <ul className={styles.posts}>
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </ul>
        </main>
    )
}