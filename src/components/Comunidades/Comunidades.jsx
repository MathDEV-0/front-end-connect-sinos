import styles from "./Comunidades.module.css";

export default function Comunidades({
  comunidades = [],
  layout = "vertical",
  onSeguir, // <- nova prop opcional
}) {
  const isHorizontal = layout === "horizontal";

  return (
    <div className={isHorizontal ? styles.scrollContainer : styles.container}>
      {comunidades.map((comunidade, index) => (
        <div className={styles.cardComunidade} key={index}>
          <img src={comunidade.imagem} alt={comunidade.nome} width="100%" />
          <h3>{comunidade.nome}</h3>
          <p>
            <strong>Tipo:</strong> {comunidade.tipo}
          </p>
          <p>
            <strong>Membros:</strong> {comunidade.membros}
          </p>
          {onSeguir ? (
            <button
              className={styles.button}
              onClick={() => onSeguir(comunidade)}
            >
              Seguir
            </button>
          ) : (
            <button className={styles.button}>Ver mais</button>
          )}
        </div>
      ))}
    </div>
  );
}
