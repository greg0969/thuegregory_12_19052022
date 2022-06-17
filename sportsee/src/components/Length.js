import { YAxis, Tooltip, ResponsiveContainer, AreaChart, Area, LineChart, XAxis, Line } from 'recharts';
// import Erreur from "./Erreur";


function Length({ averageSessionsData }) {

    // let totalLength = 0;
    // let average = 0;
    const sessionsData = averageSessionsData.sessions;
    // const week = [
    //     "L",
    //     "M",
    //     "M",
    //     "J",
    //     "V",
    //     "S",
    //     "D"
    // ];
    let week = [
        { i: 1,day : 'L'},
        { i: 2,day : 'M'},
        { i: 3,day : 'M'},
        { i: 4,day : 'J'},
        { i: 5,day : 'V'},
        { i: 6,day : 'S'},
        { i: 7,day : 'D'},

    ] 
        
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className='shadow'>
                    <div className="tooltip">
                        <p className="tooltip-item">{payload[0].value} min </p>
                    </div>
                </div>

            );
        }

        return null;
    };

    return (

        <div className="length" >
            <h3>Durée moyenne des sessions</h3>
            <ResponsiveContainer width="100%" height="100%" >
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

                    <YAxis hide={true} padding={{ top: 80, bottom: 40 }} />
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
                        className='area'
                        dataKey="sessionLength"
                        stroke="white"
                        strokeWidth={1.2}
                        fill="#ff0101"
                    />
                </AreaChart>
            </ResponsiveContainer>

            {sessionsData && <span className='dayAxis'>{week.map(weekDay => (<p key={weekDay.i}>{weekDay.day}</p>))}</span>}
        </div>


    )
}

export default Length
