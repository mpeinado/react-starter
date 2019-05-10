import React from 'react';

const TeamScores = (props) => {
    const { scores } = props;

    const teamName = scores.length > 0 ? scores[0].team_name : "";

    const tableRows = scores.map(score => {
        const scoreColor = score.score.indexOf('L') === -1 ? 'bg-success' : 'bg-danger';
        return (
            <tr key={`${score.opponent} ${score.game_date}`}>
                <th scope="row">{score.opponent}</th>
                <td className={scoreColor}>{score.score}</td>
                <td>{`${score.game_date} at ${score.game_time}`}</td>
                <td>{score.location}</td>
            </tr>
        )
    });

    const scoresTable = scores.length > 0 ? (
        <div className="row" style={{marginTop: 35}}>
            <div className="col">
                <h2>School: {teamName}</h2>

                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Opponent</th>
                            <th scope="col">Score</th>
                            <th scope="col">Game Date</th>
                            <th scope="col">Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableRows}
                    </tbody>
                </table>
            </div>
        </div>
    ) : (
        <span></span>
    );

    return (
        <div className="container">
            {scoresTable}
        </div>
    );
};

export default TeamScores;