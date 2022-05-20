import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { useParams } from "react-router-dom";
import { USER_ACTIVITY} from "../mockedData";

function DailyActivity() {
    
    const { id } = useParams();

    const currentUser = USER_ACTIVITY.find(
        (user) => user.userId.toString() === id
    );

    const data = [] ;
    for (let i = 0; i < currentUser.sessions.length; i++) {
        data.push({"name": i+1,"Poids (kg)": currentUser.sessions[i].kilogram,"Calories brûlées (kCal)":currentUser.sessions[i].calories});
      }

    return (
        <div className="dailyActivity">
            <ResponsiveContainer width="100%" height="50%" aspect={4}>
                <BarChart
                    width={835}
                    height={207}
                    data={data}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}
                    wrapperStyle={{height:"206px"}}>
                    <XAxis dataKey="name" />
                    <YAxis orientation="right" tickCount={3} />
                    <Tooltip />
                    <Legend verticalAlign="top" wrapperStyle={{ width:"auto", height:"0", lineHeight: '40px', right : "2em", top : "-9em"}}  />
                    <Bar dataKey="Poids (kg)" fill="#282D30" barSize={7} />
                    <Bar dataKey="Calories brûlées (kCal)" fill="#E60000" barSize={7} />
                </BarChart>
            </ResponsiveContainer>
        </div>

    )
}

export default DailyActivity

