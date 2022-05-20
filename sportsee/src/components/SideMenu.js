import meditationlogo from '../assets/meditation.png';
import natationlogo from '../assets/natation.png';
import bicyclelogo from '../assets/bicycle.png';
import dumbelllogo from '../assets/dumbell.png';

function SlideMenu() {
    return (
        <div className="slideMenu">
            <ul>
                <li ><img src={meditationlogo} alt=""/></li>
                <li ><img src={natationlogo} alt=""/></li>
                <li ><img src={bicyclelogo} alt=""/></li>
                <li ><img src={dumbelllogo} alt=""/></li>
            </ul>
            <p>
                Copyright, SportSee 2020
            </p>  
        </div>   
    )
}

export default SlideMenu