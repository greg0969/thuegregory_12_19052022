import { PieChart, Pie, Cell } from 'recharts';
import { USER_MAIN_DATA } from "../api/mockedDataUser12";

function Score() {

    const data = [
        { id: "1", name: "score", value: 50 },
        { id: "2", name: "score", value: USER_MAIN_DATA[0].todayScore * 100 }
    ];
  
    return (
        
        <div className="score">
            <h3>Score</h3>
            <div className="score__container">
                <div>
                    <span className='percent'>{USER_MAIN_DATA[0].todayScore*100}% <br /></span>
                    <span className='desc'>
                        de votre <br />
                        objectif
                    </span>
                </div>
            </div>
            <PieChart width={160} height={160}>
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


