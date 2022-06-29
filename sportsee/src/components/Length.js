import { YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import PropTypes from "prop-types";

/**
 * @param {array} averageSessionsData user's session
 * @returns {JSX} ReactComponent 
 */

function Length({ averageSessionsData }) {


    const sessionsData = averageSessionsData.sessions;

    let week = [
        { i: 1, day: "L" },
        { i: 2, day: "M" },
        { i: 3, day: "M" },
        { i: 4, day: "J" },
        { i: 5, day: "V" },
        { i: 6, day: "S" },
        { i: 7, day: "D" },

    ]

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className='tooltipContainer'> 
                    <div className='shadow'>
                        <div className="tooltip">
                            <p className="tooltip-item">{payload[0].value} min </p>
                        </div>
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
                        activeDot={{ r: 3 }}
                    />

                </AreaChart>

            </ResponsiveContainer>

            <span className='dayAxis'>{week.map(weekDay => (<p key={weekDay.i}>{weekDay.day}</p>))}</span>
        </div>


    )
}

Length.propTypes = {
    averageSessionsData: PropTypes.object,
};

export default Length
