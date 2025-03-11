import "./Post.css";

import { useParams } from 'react-router-dom';
import fotoCapa from "assets/sobre_mim_capa.png";
import posts from "assets/json/posts.json";
import PostModelo from 'componentes/PostModelo';
import ReactMarkdown from "react-markdown";

export default function Post() {
    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    })

    if(!post) {
        return <h1>Post não encontrado...</h1>
    }

    return (
        <PostModelo titulo={post.titulo} fotoCapa={fotoCapa}>
            <div className="post-markdown-container">
                <ReactMarkdown>
                    {post.texto}
                </ReactMarkdown>
            </div>
        </PostModelo>
    )
}