import Header from "../components/Header/Header";
import logo from "../images/TTP.webp";
import CaptureP8 from "../images/CP8.webp";
import CaptureP9 from "../images/CP9.webp";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="home">
          <div className="apercuProfil">
            <h1 className="title">Bienvenue sur mon Portfolio</h1>
            <img src={logo} alt="logo" />
            <section className="contact">
              <a href="https://www.instagram.com/tthp97/">Instagram</a>
              <a href="https://github.com/tthp97">GitHub</a>
              <Link to="/Portfolio/Profil">Visiter mon profil</Link>
            </section>
          </div>
          <div className="apercuProjet">
            <h3>Les deux projets mis en avant seront le projet 8 et 9.</h3>
            <h4>
              Projet 8 : Créer une application web de location immobilière avec
              React.
            </h4>
            <img src={CaptureP8} alt="apercu du P8" />
            <h4>
              Projet 9: Optimiser le site web d'une agence d'évènementiel.
            </h4>
            <img src={CaptureP9} alt="apercu du P9" />
          </div>
        </div>
      </main>
    </>
  );
}
