import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend, Label } from 'recharts';
import { USER_MAIN_DATA } from "../mockedDataUser12";

function Score() {

    const data = [
        { id: "1", name: "score", value: 50 },
        { id: "2", name: "score", value: USER_MAIN_DATA[0].todayScore * 100 }
    ];


    return (
        <div className="score">
            <h3>Score</h3>
            <PieChart width={160} height={160}>
                <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                >
                    {USER_MAIN_DATA[0].todayScore*100}%
                </text>
                <Pie
                    data={data}
                    dataKey="value"
                    innerRadius="90%"
                    outerRadius="100%"
                    fill="#E60000"
                    startAngle={90}
                    endAngle={-270}
                    paddingAngle={0}
                    blendStroke
                >
                    <Cell
                        key="test"
                        fill="white"
                    />
                </Pie>
            </PieChart>

        </div>


    )
}

export default Score


