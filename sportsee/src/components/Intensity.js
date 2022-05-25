import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { USER_PERFORMANCE} from "../mockedDataUser12";

function Intensity () {

    const data = [] ;
    
    for (let y = 0; y < USER_PERFORMANCE[0].data.length; y++) {
        data.push({"name": USER_PERFORMANCE[0].kind[y],"Perf": USER_PERFORMANCE[0].data[y].value});
    }
        


    return (
        <div className="intensity">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="73%" innerRadius="7%" data={data} >
                <PolarGrid  />
                <PolarAngleAxis dataKey="name" />
                <Radar name="name" dataKey="Perf" fill="#FF0101B2" fillOpacity="70%" />
                </RadarChart>
            </ResponsiveContainer>
        </div>


    )
}

export default Intensity
