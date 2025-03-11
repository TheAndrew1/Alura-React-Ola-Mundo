import "./Post.css";

import { Route, Routes, useParams } from 'react-router-dom';
import fotoCapa from "assets/sobre_mim_capa.png";
import posts from "assets/json/posts.json";
import PostModelo from 'componentes/PostModelo';
import ReactMarkdown from "react-markdown";
import NaoEncontrado from "paginas/NaoEncontrada";
import PaginaPadrao from "componentes/PaginaPadrao";

export default function Post() {
    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    })

    if(!post) {
        return <NaoEncontrado />;
    }

    return (
        <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route index element={
                    <PostModelo titulo={post.titulo} fotoCapa={fotoCapa}>
                        <div className="post-markdown-container">
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>
                        </div>
                    </PostModelo>
                } />
            </Route>
        </Routes>
    )
}