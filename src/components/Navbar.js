import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <NavLink className="navbar-brand" to="/">React Starter</NavLink>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample02">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Todos</Link>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/baskeballScores">Basketball Scores</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/posts">Post</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default withRouter(Navbar);