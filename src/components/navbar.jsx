import React, { Component } from 'react';
import logo from '../images/site_logo.png';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <nav className="navbar navbar-light bg-light">
                <div className="navbar-items">
                    <a className="navbar-brand navbar-item" href='./'><img className="m-2" src={logo} style={{ width: 30 }} alt='site logo'></img>Scores Up</a>
                    <a className="navbar-item" href='./dashboard'>Dashboard</a>
                    <a className="navbar-item" href='./new-game'>New Game</a>
                </div>
            </nav>
         );
    }
}
 
export default NavBar;