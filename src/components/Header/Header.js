import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <nav>
          <Link to="/Portfolio/">Accueil</Link>
          <Link to="/Portfolio/Profil">Profil</Link>
          <Link to="/Portfolio/Projets">Projets</Link>
        </nav>
      </header>
    </>
  );
}
