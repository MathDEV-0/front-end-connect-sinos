// src/components/TopBar/TopBar.jsx

import styles from "./TopBar.module.css";
import PostMenuButton from "../PostMenuButton/PostMenuButton";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      {/* Itens de texto */}
      <Link to="/perfil" className={styles.item}>
        Perfil
      </Link>
      <div className={styles.separator}></div> {/* Traço entre itens */}
      <span className={styles.item}>Comunidades</span>
      <div className={styles.separator}></div> {/* Traço entre itens */}
      <span className={styles.item}>Sinos Flix</span>
      <div className={styles.separator}></div> {/* Traço entre itens */}
      <span className={styles.item}>Repositórios</span>
      <div className={styles.separator}></div> {/* Traço entre itens */}
      <PostMenuButton />
      {/* Ícones */}
      <div className={styles.separator}></div> {/* Traço entre itens */}
      <img
        src="/assets/icons/search.png"
        alt="Buscar"
        className={styles.icon}
      />
      <div className={styles.separator}></div> {/* Traço entre itens */}
      <img
        src="/assets/icons/bell.png"
        alt="Notificações"
        className={styles.icon}
      />
      <div className={styles.separator}></div> {/* Traço entre itens */}
      <img
        src="/assets/icons/settings.png"
        alt="Configurações"
        className={styles.icon}
      />
    </div>
  );
};

export default TopBar;
