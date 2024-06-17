import { Link } from "react-router-dom";
import logo from "../../images/TTP.webp";
import "../../style/General.css";
export default function Header() {
  return (
    <>
      <header>
        <img src={logo} alt="logo" />
        <h1>Bienvenue sur mon Portfolio</h1>
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/ProfilDescription">Mon profil</Link>
          <Link to="Projet">Projet Réalisés</Link>
        </nav>
      </header>
    </>
  );
}
