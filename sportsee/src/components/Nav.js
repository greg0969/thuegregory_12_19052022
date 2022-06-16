import { NavLink } from "react-router-dom"
import "../styles/index.scss";

function Nav() {
    return (
        <nav>
            <ul>
                <NavLink to="/">
                    <li className="link">Accueil</li>
                </NavLink>
                <li className="link">Profil</li>
                <li className="link">Réglage</li>
                <li className="link">Communauté</li>

            </ul>
        </nav>
    )
}

export default Nav

