import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid } from 'recharts';
import { USER_ACTIVITY } from "../api/mockedDataUser12";

/**
 * @description Component daily activity
 * @param {object} activity activity datas of user
 * @returns ReactComponent
 */

function DailyActivity() {
    const data = [];

    for (let y = 0; y < USER_ACTIVITY[0].sessions.length; y++) {
        data.push({ "name": y + 1, "Poids (kg)": USER_ACTIVITY[0].sessions[y].kilogram, "Calories brûlées (kCal)": USER_ACTIVITY[0].sessions[y].calories });
    }

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
                width={626}
                height={207}
                barGap={8}
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                wrapperStyle={{ height: "206px" }}>
                <CartesianGrid strokeDasharray="1 1" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis
                    // yAxisId="kilogram"
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: "#9B9EAC" }}
                    tickMargin={25}
                    orientation="right"
                    dataKey="Poids (kg)"
                    tickCount="3"
                    domain={["dataMin-3"]}
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
                <Bar dataKey="Poids (kg)" fill="#282D30" barSize={7} />
                <Bar dataKey="Calories brûlées (kCal)" fill="#E60000" barSize={7} />
            </BarChart>
        </div>

    )
}

export default DailyActivity

