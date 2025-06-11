import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PostMenuButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const PostMenuButton = ({ inTopBar, onTogglePopup }) => {
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();

  const toggleOptions = () => {
    const novoEstado = !showOptions;
    setShowOptions(novoEstado);
    if (onTogglePopup) onTogglePopup(novoEstado); // chama o callback
  };

  const handleImageSelect = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const imagesArray = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setShowOptions(false);
      if (onTogglePopup) onTogglePopup(false); // fecha o popup no TopBar
      navigate("/create-post", { state: { images: imagesArray } });
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.plusWrapper} onClick={toggleOptions}>
        <FontAwesomeIcon icon={faPlus} className={styles.plusIcon} />
      </div>

      {showOptions && (
        <div className={styles.optionsPopup}>
          <label htmlFor="uploadInput" className={styles.optionButton}>
            Adicionar imagem
          </label>
          <input
            type="file"
            multiple
            accept="image/*"
            id="uploadInput"
            style={{ display: "none" }}
            onChange={handleImageSelect}
          />

          <button
            className={styles.optionButton}
            onClick={() => {
              setShowOptions(false);
              if (onTogglePopup) onTogglePopup(false);
              navigate("/create-post", { state: { isTextOnly: true } });
            }}
          >
            Postar apenas texto
          </button>
        </div>
      )}
    </div>
  );
};

export default PostMenuButton;
