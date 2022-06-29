import logo from '../assets/logo.png';
import logoName from '../assets/logoName.png';
import "../styles/index.scss";


function Logo() {
    return (
        <div className="logoSection">
            <img src={logo} alt='sportsee' className='logo-sportsee' />
            <img src={logoName} alt='sportsee' className='logoName' />
        </div>
        
         
    )
}

export default Logo