import styles from "./Comunidades.module.css";

const mockComunidades = [
  {
    nome: "Odeio JavaScript",
    tipo: "TI",
    membros: 1240,
    imagem: "/assets/comunidades/comunidade_odeio_javascript.png",
  },
  {
    nome: "Fofoqueiros do B",
    tipo: "Fofoca",
    membros: 120,
    imagem: "/assets/comunidades/comunidade_fofoqueiros_b.jpeg",
  },
  {
    nome: "Apoio RS",
    tipo: "Doações",
    membros: 360,
    imagem: "/assets/comunidades/comunidade_rs.jpg",
  },
];

export default function Comunidades() {
  return (
    <div className={styles.container}>
      <div className={styles.comunidades}>
        <h2>Comunidades</h2>
        {mockComunidades.map((comunidade, index) => (
          <div className={styles.cardComunidade} key={index}>
            <img src={comunidade.imagem} alt={comunidade.nome} width="100%" />
            <h3>{comunidade.nome}</h3>
            <p>
              <strong>Tipo:</strong> {comunidade.tipo}
            </p>
            <p>
              <strong>Membros:</strong> {comunidade.membros}
            </p>
            <button>Ver mais</button>
          </div>
        ))}
      </div>
    </div>
  );
}
