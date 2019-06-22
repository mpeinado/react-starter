import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from '../form/select';
import { getBasketballScoresAction, getBasketballTeamsAction } from './../../actions/BasketballScoresActions';
import TeamScores from './teamScores';

class BasketballScoresPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            activeTeam: 1
        }

        this.handelTeamChange = this.handelTeamChange.bind(this);
    }

    componentDidMount() {
        this.props.getBasketballTeams();
        this.props.getBasketballScores();
    }

    handelTeamChange = (teamID) => {
        teamID = parseInt(teamID);

        this.setState({
            activeTeam: teamID
        });

    }

    render() {
        const { basketballTeams, basketballScores } = this.props;
        const { activeTeam } = this.state;

        const activeScores = basketballScores.filter(team => {
            return team.teamid === activeTeam;
        });

        return (
            <div className="basketball-scores-page container" style={{marginBottom: 35}}>
                <div className="row">
                    <div className="col">
                        <h1>Basketball Scores</h1>
                    </div>
                </div>
    
                <div className="row">
                    <div className="col">
                        <Select basketballTeams={basketballTeams} onChange={this.handelTeamChange}/>
                    </div>
                </div>

                <TeamScores scores={activeScores} />
                
            </div>
        );
    }
    
}

const mapStateToProps = (state) => {
    return {
        basketballTeams: state.basketballTeams,
        basketballScores: state.basketballScores
    }
}

const mapDispatchToprops = (dispatch) => {
    return {
        getBasketballScores: () => { dispatch(getBasketballScoresAction()) },
        getBasketballTeams: () => { dispatch(getBasketballTeamsAction())}
    }
}

export default connect(mapStateToProps, mapDispatchToprops)(BasketballScoresPage);