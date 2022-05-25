import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { USER_ACTIVITY} from "../mockedDataUser12";

function DailyActivity() {
    const data = [] ;
   
        for (let y = 0; y < USER_ACTIVITY[0].sessions.length; y++) {
            data.push({"name": y+1,"Poids (kg)": USER_ACTIVITY[0].sessions[y].kilogram,"Calories brûlées (kCal)":USER_ACTIVITY[0].sessions[y].calories});
        }
        

    return (
        <div className="dailyActivity">
            <ResponsiveContainer width="100%" height="50%" aspect={4}>
                <BarChart
                    width={500}
                    height={207}
                    data={data}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}
                    wrapperStyle={{height:"206px"}}>
                    <XAxis dataKey="name" />
                    <YAxis orientation="right" tickCount={3} />
                    <Tooltip />
                    <Bar dataKey="Poids (kg)" fill="#282D30" barSize={7} />
                    <Bar dataKey="Calories brûlées (kCal)" fill="#E60000" barSize={7} />
                </BarChart>
            </ResponsiveContainer>
        </div>

    )
}

export default DailyActivity

