import { NavLink } from "react-router-dom"
import "../styles/index.scss";

function Nav() {
    return (
        <nav>
            <ul>
                <li className="link">Accueil</li>
                <li className="link">Profil</li>
                <li className="link">Réglage</li>
                <li className="link">Communauté</li>

            </ul>
        </nav>   
    )
}

export default Nav


    // <NavLink to="/" >
    //     <li className="link">Accueil</li>
    // </NavLink>
    // <NavLink to="/" >
    //     <li className="link">Profil</li>
    // </NavLink>
    // <NavLink to="/" >
    //     <li className="link">Réglage</li>
    // </NavLink>
    // <NavLink to="/">
    //     <li className="link">Communauté</li>
    // </NavLink>