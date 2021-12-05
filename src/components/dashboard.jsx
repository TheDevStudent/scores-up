import React, { Component } from 'react';

class DashBoardTable extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }

    render() {
        return (
            <div className="app-container">
                <table>
                    <thead>
                        <tr>
                            <th>Team/Player Name</th>
                            <th>Games Played</th>
                            <th>Wins</th>
                            <th>Losses</th>
                            <th>Win Ratio</th>
                            <th>GF</th>
                            <th>GA</th>
                            <th>GD</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.data.map((player) => (
                        <tr key={player.id}>
                            <td> { player.playerName }</td>
                            <td> { player.gamesPlayed }</td>
                            <td> { player.wins }</td>
                            <td> { player.losses }</td>
                            <td> { player.winRatio }</td>
                            <td> { player.GF }</td>
                            <td> { player.GA }</td>
                            <td> { player.GD }</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
 
export default DashBoardTable;
