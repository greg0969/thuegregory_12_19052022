import { YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { USER_AVERAGE_SESSIONS } from "../User12/USER_AVERAGE_SESSIONS";


function Length(index) {

    // let totalLength = 0;
    // let average = 0;
    // const data = [];
    let sessionsData = USER_AVERAGE_SESSIONS.sessions
    // const dayArray = ["L", "M", "M", "J", "V", "S", "D"]
    // for (let i = 0; i < sessionsData.length; i++) {
    //     data.push({ "id": i+1,"day": sessionsData[i].day, "sessionLength": sessionsData[i].sessionLength });
    //     totalLength += data[i].sessionLength

    // }
    // console.log(data.id)
    // average = totalLength / data.length

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
            <h3>Durée moyenne des sessions</h3>
            <div className='shadow'>

            </div>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    width={260}
                    height={260}
                    data={sessionsData}
                    style={{
                        background: "rgba(255,0,0,1)",
                        borderRadius: "5px",
                    }}
                    margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
                >
                    <YAxis hide={true} padding={{ top: 80, bottom: 40}} />
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
            <span className='dayAxis'>{sessionsData.map(sessionsData => (<p key={1}>{sessionsData.day}</p>))}</span>
        </div>


    )
}

export default Length
