import Header from "../components/Header/Header";
import CaptureP8 from "../images/CP8.webp";
import CaptureP9 from "../images/CP9.webp";

export default function ProjetRéalisés() {
  return (
    <>
      <Header />
      <main>
        <h2 className="title">Projets Réalisés</h2>
        <section className="projetContainer">
          <section className="pSpec">
            <h3>
              Projet 8 : Créer une application web de location immobilière avec
              React.
            </h3>
            <img src={CaptureP8} alt="illustration du p8" />
            <p>
              Pour ce projet, nous avons du utiliser la librairie React. Le
              principe était de pouvoir réutiliser les composants à plusieurs
              endroits du site. Il nous a fallut aussi utiliser React Router Dom
              qui nous a permis de créer des routes pour créer différentes pages
              sur la base d'une seule.
            </p>
            <p>
              Les objectifs pédagogiques de ce projet étaient les suivants :
              <br />
              - Configurer la navigation entre les pages de l'application avec
              React Router <br />
              - Développer des éléments de l'interface d'un site web grâce à des
              composants React <br />
              - Mettre en œuvre des animations CSS <br />- Initialiser une
              application avec Create React App
            </p>
            <a href="https://github.com/tthp97/projet-8.git">
              Lien vers le code du site &#x28;GitHub&#x29;
            </a>
          </section>
          <section className="pSpec">
            <h3>
              Projet 9 : Optimiser le site web d'une agence d'évènementiel.
            </h3>
            <img src={CaptureP9} alt="illustration du p9" />
            <p>
              Dans ce projet, nous avons du optimiser les performances d'un site
              d'évenementiel. Pour analyser ses performances, nous avons
              utiliser l'extension web Google LightHouse. Il fallait aussi
              vérifié son accesibilité avec l'extension Wave. Les images ont été
              converties en webp. Il y a eu également un ajout de RichSnippet
              permettant un meilleur référencement.
            </p>
            <p>
              Les objectifs pédagogiques de ce projet étaient les suivants :
              <br />- Optimiser la performance d'un site web
            </p>
            <a href="https://github.com/tthp97/projet-9.git">
              Lien vers le code du site &#x28;GitHub&#x29;
            </a>
          </section>
        </section>
      </main>
    </>
  );
}
