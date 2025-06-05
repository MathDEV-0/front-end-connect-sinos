// src/components/Post/Post.js
import styles from "./Post.module.css";

const Post = ({ autor, conteudo, imagens }) => {
  return (
    <div className={styles.postContainer}>
      <div className={styles.avatar}></div>
      <div className={styles.content}>
        <p className={styles.autor}>{autor}</p>

        {/* Imagem vem antes da descrição */}
        {imagens && imagens.length > 0 && (
          <img src={imagens[0]} alt="Post" className={styles.postImage} />
        )}

        {/* Descrição com quebra de linha manual */}
        <div className={styles.conteudo}>
          {conteudo.split("\n").map((linha, i) => (
            <span key={i}>
              {linha}
              <br />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
