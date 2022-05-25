import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { USER_AVERAGE_SESSIONS } from "../mockedDataUser12";


function Length() {
    

    let totalLength = 0;
    let average = 0 ;
    const data = [];
    const dayArray = ["L","M","M","J","V","S","D"]
    for (let y = 0; y < USER_AVERAGE_SESSIONS[0].sessions.length; y++) {
        data.push({ "name": dayArray[y], "day": USER_AVERAGE_SESSIONS[0].sessions[y].day, "sessionLength": USER_AVERAGE_SESSIONS[0].sessions[y].sessionLength});
        totalLength += data[y].sessionLength
    }
        
    average = totalLength / data.length
    
    return (
        <div className="length">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={258}
                    height={263}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <XAxis axisLine={false} tickLine={false} dataKey="name" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" strokeWidth={2} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>


    )
}

export default Length
