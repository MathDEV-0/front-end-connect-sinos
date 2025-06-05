// src/pages/Feed/Feed.js
import Retangulo from "../../components/Retangulo/Retangulo";
import { Link, useNavigate } from "react-router-dom";
import TopBar from "../../components/TopBar/TopBar";
import Post from "../../components/Post/post";
import styles from "./Feed.module.css";
import Comunidades from "../../components/Comunidades/Comunidades";
import { usePostContext } from "../../context/PostContext";
import { useState } from "react";

const Feed = () => {
  const navigate = useNavigate();
  const { posts } = usePostContext(); // Posts global
  const [showOptions, setShowOptions] = useState(false); // Estado para menu popup

  const handleImageSelect = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const imagesArray = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setShowOptions(false); // Fecha  menu
      navigate("/create-post", { state: { images: imagesArray } });
    }
  };

  return (
    <div>
      {/* Header com logo */}
      <Retangulo tipo="1">
        <Link to="/feed">
          <img src="/assets/logo.png" alt="Logo" className={styles.logoImage} />
        </Link>
      </Retangulo>

      {/* TopBar */}
      <TopBar />

      <div className={styles.feedContent}>
        {/* Posts à esquerda */}
        <div className={styles.postsSection}>
          {posts.map((post, index) => (
            <Post
              key={index}
              autor={post.autor}
              conteudo={post.conteudo}
              imagens={post.imagens}
            />
          ))}
        </div>

        {/* Comunidades à direita */}
        <div className={styles.comunidadesWrapper}>
          <Comunidades />
        </div>
      </div>
    </div>
  );
};

export default Feed;
