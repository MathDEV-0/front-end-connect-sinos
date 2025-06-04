import styles from "./Perfil.module.css";
import TopBar from "../../components/TopBar/TopBar";
import Retangulo from "../../components/Retangulo/Retangulo";
import { Link } from "react-router-dom";
const Perfil = () => {
  return (
    <div className={styles.page}>
      <Retangulo tipo="1">
        <Link to="/feed">
          <img src="/assets/logo.png" alt="Logo" className={styles.logoImage} />
        </Link>
      </Retangulo>

      {/* TopBar */}
      <Retangulo tipo="12">
        <TopBar />
      </Retangulo>

      <div className={styles.userCard}>
        <div className={styles.avatar}></div>
        <div className={styles.userInfo}>
          <div className={styles.username}>Nome usuário</div>
          <div className={styles.bio}>Bio</div>
        </div>
        <div className={styles.followStats}>
          <div className={styles.stat}>
            <strong>0</strong> followers
          </div>
          <div className={styles.stat}>
            <strong>0</strong> following
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.posts}>
          <div className={styles.post}></div>
          <div className={styles.post}></div>
        </div>

        <div className={styles.buttons}>
          <button className={styles.button}>create</button>
          <button className={styles.button}>comunidades</button>
          <button className={styles.button}>editar perfil</button>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
