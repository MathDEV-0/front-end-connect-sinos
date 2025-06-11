// src/components/TopBar/TopBar.jsx

import styles from "./TopBar.module.css";
import PostMenuButton from "../PostMenuButton/PostMenuButton";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.leftGroup}>
        <Link to="/perfil" className={styles.item}>
          Perfil
        </Link>
        <div className={styles.separator}></div>
        <Link to="/comunidadespage" className={styles.item}>
          Comunidades
        </Link>
        <div className={styles.separator}></div>
        <span className={styles.item}>Sinos Flix</span>
        <div className={styles.separator}></div>
        <span className={styles.item}>Repositórios</span>
        <div className={styles.separator}></div>
        <PostMenuButton inTopBar />
      </div>

      <div className={styles.rightGroup}>
        <img
          src="/assets/icons/search.png"
          alt="Buscar"
          className={styles.icon}
        />
        <div className={styles.separator}></div>
        <img
          src="/assets/icons/bell.png"
          alt="Notificações"
          className={styles.icon}
        />
        <div className={styles.separator}></div>
        <img
          src="/assets/icons/settings.png"
          alt="Configurações"
          className={styles.icon}
        />
      </div>
    </div>
  );
};

export default TopBar;
