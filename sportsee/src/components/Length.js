import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { USER_AVERAGE_SESSIONS } from "../api/mockedDataUser12";


function Length() {


    let totalLength = 0;
    let average = 0;
    const data = [];
    const dayArray = ["L", "M", "M", "J", "V", "S", "D"]
    for (let y = 0; y < USER_AVERAGE_SESSIONS[0].sessions.length; y++) {
        data.push({ "name": dayArray[7], "day": USER_AVERAGE_SESSIONS[0].sessions[y].day, "sessionLength": USER_AVERAGE_SESSIONS[0].sessions[y].sessionLength });
        totalLength += data[y].sessionLength
    }

    average = totalLength / data.length

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="tooltip">
                    <p className="tooltip-item">{payload[0].value} min </p>
                </div>
            );
        }

        return null;
    };


    return (
        <div className="length">


            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    width={260}
                    height={260}
                    data={data}
                    style={{
                        background: "#FF0000",
                        borderRadius: "5px",
                    }}
                    margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
                >
                    <XAxis axisLine={false} tickLine={false} dataKey="name" />
                    <YAxis hide={true} padding={{ top: 50, bottom: 10 }} />
                    <Tooltip
                        content={<CustomTooltip />}
                        cursor={{
                            stroke: "black",
                            strokeOpacity: 0,
                            strokeWidth: 40,
                        }}
                    />

                    <Area
                        type="monotone"
                        dataKey="sessionLength"
                        stroke="white"
                        strokeWidth={1.2}
                        fill="#ff0101"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>


    )
}

export default Length
