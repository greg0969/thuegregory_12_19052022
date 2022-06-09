
import ActivityTracking from "../components/ActivityTracking"
import Logo from "../components/Logo"
import Nav from "../components/Nav"
import SlideMenu from "../components/SideMenu"

function UserProfil () {
    return (
        <div className="profil">
            <header>
                <Logo />
                <Nav />
            </header>
            <div className="container">
                <SlideMenu /> 
                <ActivityTracking />
            </div>
            
        </div>
    )
}

export default UserProfil