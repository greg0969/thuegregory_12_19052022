import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

/**
 * @description Component daily activity
 * @param {object} data activity datas of user
 * @returns ReactComponent
 */

function DailyActivity({ activityData }) {
    

    /**
    * Customized Tooltip
    */
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="tooltip">
                    <p className="tooltip-item">{payload[0].value}kg</p>
                    <p className="tooltip-item">{payload[1].value}kCal</p>
                </div>
            );
        }

        return null;
    };

    return (
        <div className="dailyActivity">
            <div className='dailyHeader'>
                <h3>Activité quotidienne</h3>
                <ul>
                    <li>Poids (kg)</li>
                    <li>Calories brûlées (kCal)</li>
                </ul>
            </div>
            <BarChart
                width={625}
                height={207}
                barGap={8}
                data={activityData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                wrapperStyle={{ height: "206px" }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                    tickFormatter={(tick) => `${tick + 1}`}
                    tickLine={false}
                    tick={{ fill: "#9B9EAC" }}
                    tickMargin={10}
                    axisLine={{ stroke: "#9B9EAC" }}
                    padding={{ left: -30, right: -30 }}
                    fontSize={14}
                />
          

                <YAxis
                    orientation='left'
                    dataKey="calories"                    
                    tickCount={3}
                    hide
                />
                <YAxis
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: "#9B9EAC" }}
                    tickMargin={25}
                    dataKey="kilogram"
                    yAxisId='poid'
                    orientation='right'
                    tickCount={3}
                    fontSize={14}
                    domain={["dataMin - 1"]}
                />
                
                <Tooltip
                    position={{ y: 35 }}
                    content={<CustomTooltip />}
                    cursor={{
                        fill: "#C4C4C4",
                        fillOpacity: "0.4",
                        strokeWidth: 10,
                    }}
                />
                <Bar dataKey="kilogram" fill="#282D30" barSize={7} radius={[3, 3, 0, 0]} />
                <Bar dataKey="calories" fill="#E60000" barSize={7} radius={[3, 3, 0, 0]} />
            </BarChart>
        </div>

    )
}

export default DailyActivity

