import Header from "../components/Header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="apercu">
          <section className="apercuProjet">
            <h2>Aperçu des projets réalisés</h2>
          </section>
          <section className="apercuProfil">
            <h2>Apeçu de mon profil</h2>
          </section>
        </div>
      </main>
    </>
  );
}
