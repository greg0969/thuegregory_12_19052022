import { PieChart, Pie, Cell } from 'recharts';

import PropTypes from "prop-types";

/**
 * @description Component Score
 * @param {object} scoreData user's score
 * @returns ReactComponent
 */

function Score({ scoreData }) {

    const data = [
        { id: "1", name: "score", value: 50 },
        { id: "2", name: "score", value: scoreData * 100 }
    ];
    return (
        
        <div className="score">
            <h3>Score</h3>
            <div className="score__container">
                <div>
                    {scoreData &&<span className='percent'>{scoreData*100}% <br /></span>}
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

Score.propTypes = {
    scoreData: PropTypes.number,
  };

export default Score


