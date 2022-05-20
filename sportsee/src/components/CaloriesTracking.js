import flame from "../assets/flame.png";
import protein from "../assets/food.png";
import glucides from "../assets/glucides.png";
import lipides from "../assets/cheeseburger.png";

function CaloriesTracking ({keyData}) {

    return (
        <div className="caloriesTracking">
            
            <div className="calorieCount">
                <img className="flame" src={flame} alt="flame" />
                <span>
                    <p>{keyData.calorieCount}kCal</p>
                    <p>Calories</p>
                </span>
                
            </div>

            <div className="protein">
                <img className="proteinLogo" src={protein} alt="proteinLogo" />
                <span>
                    <p>{keyData.proteinCount}g</p>
                    <p>Proteines</p>
                </span>
            </div>

            <div className="glucide">
                <img className="glucideLogo" src={glucides} alt="glucideLogo" />
                <span>
                    <p>{keyData.carbohydrateCount}g</p>
                    <p>Glucides</p>
                </span>
            </div>

            <div className="lipid">
                <img className="lipideLogo" src={lipides} alt="lipideLogo" />
                <span>
                    <p>{keyData.lipidCount}g</p>
                    <p>Lipides</p>
                </span>
            </div>
            
        </div>
    )
}

export default CaloriesTracking
    