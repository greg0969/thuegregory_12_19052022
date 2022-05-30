import { USER_MAIN_DATA } from "../api/mockedDataUser12";
import logo from "../assets/flame.png";
import proteinCount from "../assets/food.png";
import carbohydrateCount from "../assets/glucides.png";
import lipidCount from "../assets/cheeseburger.png";

function Macro () {
    
    const macroArray = Object.entries(USER_MAIN_DATA[0].keyData)
    
    return (
        <div className="caloriesTracking">
           {macroArray.map(macroData => (
            <div key={macroData[0]} className={macroData[0]}>
                {macroData[0] === "calorieCount" && <img className={macroData[0]} src={logo} alt="flame" />}
                {macroData[0] === "proteinCount" && <img className={macroData[0]} src={proteinCount} alt="food" />}
                {macroData[0] === "carbohydrateCount" && <img className={macroData[0]} src={carbohydrateCount} alt="glucides" />}
                {macroData[0] === "lipidCount" && <img className={macroData[0]} src={lipidCount} alt="lipidCount" />}
                
                <span>
                    <p>{macroData[1]}</p>
                    {macroData[0] === "calorieCount" && <p>Calories</p>}
                    {macroData[0] === "proteinCount" && <p>Protéines</p>}
                    {macroData[0] === "carbohydrateCount" && <p>Glucides</p>}
                    {macroData[0] === "lipidCount" && <p>Lipides</p>}

                     
                </span>
            </div>
           ))}
            
        </div>
        
    )
}

export default Macro
    
