import logo from "../assets/flame.png";
import proteinCount from "../assets/food.png";
import carbohydrateCount from "../assets/glucides.png";
import lipidCount from "../assets/cheeseburger.png";


function Macro ({ macroData }) {
    

    return (
       
        <div className="caloriesTracking">
           
            <div className="macroContainer">
                <img className="calorieCount" src={logo} alt="flame" />
                <div>
                    {macroData.calorieCount &&<p className="key">{macroData.calorieCount} kCal</p>}<p className="value">Calories</p>
                </div>
            </div>
            <div className="macroContainer">
                <img className="proteinCount" src={proteinCount} alt="food" />
                <div>
                    {macroData.proteinCount &&<p className="key">{macroData.proteinCount} g</p>}<p className="value">Protéines</p>
                </div>
            </div>
            <div className="macroContainer"> 
                <img className="carbohydrateCount" src={carbohydrateCount} alt="glucides" /> 
                <div>
                    {macroData.carbohydrateCount &&<p className="key">{macroData.carbohydrateCount} g</p>}<p className="value">Glucides</p>
                </div>
            </div>
            <div className="macroContainer">
                <img className="lipidCount" src={lipidCount} alt="lipidCount" /> 
                <div>
                    {macroData.lipidCount &&<p className="key">{macroData.lipidCount} g</p>}<p className="value">Lipides</p>
                </div>
       
            </div>
      
            
        </div>
        
    )
}

export default Macro
    
