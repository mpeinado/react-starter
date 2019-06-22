import React,  { Component } from 'react';
import { connect } from 'react-redux';

class Select extends Component {
    constructor (props){
        super(props);
        
        this.state = {
            selection: null
        };
        
        this.handelChange = this.handelChange.bind(this);
    }

    handelChange = (evt) => {
        const teamID = evt.target.value;

        this.props.onChange(teamID);
    }
    
    render() {
        const { basketballTeams } = this.props;

        const options = basketballTeams.map(team => {
            return (
                <option value={team.teamid} key={team.teamid}>{team.team_name}</option>
            )
        });

        return (
            <div className="row">
                <div className="col">
                    <form>
                        <div className="form-row align-items-center">
                            <div className="col-auto my-1">
                                <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">Select School</label>
                                <select className="custom-select mr-sm-2" id="inlineFormCustomSelect" onChange={this.handelChange}>
                                    {options}
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        basketballTeams: state.basketballTeams
    }
}

export default connect(mapStateToProps)(Select);