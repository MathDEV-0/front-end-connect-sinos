import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./CreatePost.module.css";
import { usePostContext } from "../../context/PostContext";

const CreatePost = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addPost } = usePostContext();

  const [descricao, setDescricao] = useState("");

  // Verifica se é um post apenas de texto
  const isTextOnly = location.state?.isTextOnly || false;
  const images = location.state?.images || [];

  const handleSubmit = () => {
    if (!isTextOnly && images.length === 0 && !descricao.trim()) {
      alert("Por favor, insira uma descrição ou selecione uma imagem.");
      return;
    }

    const newPost = {
      autor: "Você",
      conteudo: descricao || "",
      imagens: isTextOnly ? [] : images,
    };

    addPost(newPost);
    navigate("/feed");
  };

  return (
    <div className={styles.container}>
      {/* Visualizador de imagem (só aparece se não for texto puro) */}
      {!isTextOnly && images.length > 0 && (
        <div className={styles.imageViewer}>
          <img src={images[0]} alt="Preview" />
        </div>
      )}

      {/* Campo de texto sempre aparece */}
      <textarea
        className={styles.descricao}
        placeholder="Escreva uma descrição..."
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />

      <button className={styles.postarBtn} onClick={handleSubmit}>
        Postar
      </button>
    </div>
  );
};

export default CreatePost;
