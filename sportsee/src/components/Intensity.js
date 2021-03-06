import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
// import Erreur from "./Erreur";
import PropTypes from "prop-types";

/**
 * @param {perfData} perfData user's perf
* @returns {JSX} ReactComponent
*/

function Intensity({ perfData }) {


    const label = [
        "Intensité",
        "Vitesse",
        "Force",
        "Endurance",
        "Energie",
        "Cardio",
    ];

    // Customize tick with Label
    function customTick(tick) {
        return label[tick - 1];
    }

    return (
        <div className="intensity">
            <ResponsiveContainer width="100%">
                <RadarChart
                    cx="50%" cy="50%" outerRadius="73%" innerRadius="7%" data={perfData} >
                    <PolarGrid />
                    <PolarAngleAxis
                        fontSize={12}
                        dataKey="kind"
                        stroke="white"
                        tickLine={false}
                        tickFormatter={customTick}
                        style={{ fontSize: "7px" }}
                        cy={3} />
                    <Radar name="name" dataKey="value" fill="#FF0101B2" fillOpacity="70%" />
                </RadarChart>
            </ResponsiveContainer>
        </div>


    )
}

Intensity.propTypes = {
    perfData: PropTypes.array,
  };
  

export default Intensity
