import React from "react";
import { Link } from "react-router-dom";
import Retangulo from "../../components/Retangulo/Retangulo";
import TopBar from "../../components/TopBar/TopBar";
import Comunidades from "../../components/Comunidades/Comunidades";
import styles from "./ComunidadesPage.module.css";
import mockComunidades from "../../mocks/mockComunidades";
import mockRecomendadas from "../../mocks/mockRecomendadas";
import mockAmigos from "../../mocks/mockAmigos";

export default function ComunidadesPage() {
  return (
    <div className={styles.page}>
      <Retangulo tipo="1">
        <Link to="/feed">
          <img src="/assets/logo.png" alt="Logo" className={styles.logoImage} />
        </Link>
      </Retangulo>
      <TopBar />

      <div className={styles.mainContent}>
        <div className={styles.leftColumn}>
          <section className={styles.section}>
            <h2>Suas Comunidades</h2>
            <div className={styles.scrollContainer}>
              <Comunidades comunidades={mockComunidades} layout="horizontal" />
            </div>
          </section>

          <section className={styles.section}>
            <h2>Recomendações</h2>
            <div className={styles.scrollContainer}>
              <Comunidades comunidades={mockRecomendadas} layout="horizontal" />
            </div>
          </section>
        </div>

        <aside className={styles.sidebar}>
          <h2>Amigos</h2>
          <div className={styles.amigosGrid}>
            {mockAmigos.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Amigo ${index + 1}`}
                className={styles.amigoCard}
              />
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
