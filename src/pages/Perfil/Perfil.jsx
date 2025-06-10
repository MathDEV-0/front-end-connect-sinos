import { useState, useRef } from "react";
import styles from "./Perfil.module.css";
import TopBar from "../../components/TopBar/TopBar";
import Retangulo from "../../components/Retangulo/Retangulo";
import { Link } from "react-router-dom";

const Perfil = () => {
  const [username, setUsername] = useState("Nome usuário");
  const [bio, setBio] = useState("Bio");
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const [editing, setEditing] = useState(false);
  const [newUsername, setNewUsername] = useState(username);
  const [newBio, setNewBio] = useState(bio);
  const [avatar, setAvatar] = useState(null);
  const fileInputRef = useRef(null);

  const handleEdit = () => setEditing(true);

  const handleSave = () => {
    setUsername(newUsername);
    setBio(newBio);
    setEditing(false);
  };

  const handleFollow = () => setFollowers((prev) => prev + 1);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className={styles.page}>
      <Retangulo tipo="1">
        <Link to="/feed">
          <img src="/assets/logo.png" alt="Logo" className={styles.logoImage} />
        </Link>
      </Retangulo>

      <TopBar />

      <div className={styles.userCard}>
        <div className={styles.avatarContainer}>
          <div className={styles.avatar}>
            {avatar ? (
              <img src={avatar} alt="Avatar" className={styles.avatarImage} />
            ) : (
              <div className={styles.avatarPlaceholder}></div>
            )}
          </div>

          {editing && (
            <>
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className={styles.avatarInput}
                ref={fileInputRef}
                style={{ display: "none" }}
              />
              <button
                className={styles.avatarEditButton}
                onClick={triggerFileInput}
              >
                Alterar Foto
              </button>
            </>
          )}
        </div>

        <div className={styles.userInfo}>
          {editing ? (
            <>
              <input
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                className={styles.editInput}
              />
              <textarea
                value={newBio}
                onChange={(e) => setNewBio(e.target.value)}
                className={styles.editTextarea}
              />
            </>
          ) : (
            <>
              <div className={styles.username}>{username}</div>
              <div className={styles.bio}>{bio}</div>
            </>
          )}
        </div>

        <div className={styles.followStats}>
          <div className={styles.stat}>
            <strong>{followers}</strong> followers
          </div>
          <div className={styles.stat}>
            <strong>{following}</strong> following
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.posts}>
          <div className={styles.post}></div>
          <div className={styles.post}></div>
        </div>

        <div className={styles.buttons}>
          {editing ? (
            <button className={styles.button} onClick={handleSave}>
              salvar
            </button>
          ) : (
            <button className={styles.button} onClick={handleEdit}>
              editar perfil
            </button>
          )}
          <button className={styles.button} onClick={handleFollow}>
            seguir (mock)
          </button>
          <button className={styles.button}>comunidades</button>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
