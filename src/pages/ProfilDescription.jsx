import Header from "../components/Header/Header";

export default function ProfilDescription() {
  return (
    <>
      <Header />
      <h1 className="title">Mon Profil</h1>
      <main className="mainProfil">
        <section>
          <h2>Mon Parcours</h2>
          <section>
            <h3>Baccalauréat STI2D</h3>
            <p>
              J'ai obtenu mon Baccalauréat STI2D en juillet 2023, avec l'option
              Energie et Environnement. Dispensés par le lycée Jehan De Beauce.
            </p>
          </section>
          <section>
            <h3>Intégrateur Web</h3>
            <p>
              J'achève ma formation d'intégrateur web en juin 2024, formation
              dispensée par l'école OpenClassrooms.
            </p>
          </section>
        </section>
        <section>
          <h2>Mes Compétences</h2>
          <section>
            <h3>Gestion de Projet Agile</h3>
            <p>
              La gestion de projet agile permet de mener à bien un projet de
              manière intelligente, avec des taches répartie équitablement pour
              chacun des collaborateurs d'un projet. Je sais utiliser des outils
              utiles à la gestion de projets tels que Trello ou Daily.dev.
            </p>
            <h3>Référencement et Seo</h3>
            <p>
              Je suis en capacité d'optimiser les performances d'un site web :
              ajouter de diverses éléments pour un meilleur référencement,
              optimisation/transformation de script permettant une réduction du
              temps de chargement. Optimisation des images.
            </p>
            <h3>Javascript : librairie React &#x28;CRA&#x29;</h3>
            <p>
              React est une librairie permettant de créer des single page. On
              incrémente de manière dynamique une page web pouvant en décliner
              plusieurs à l'aide de modules réutilisables. On évite donc
              l'arborescence HTML classique.
            </p>
          </section>
        </section>
      </main>
    </>
  );
}
