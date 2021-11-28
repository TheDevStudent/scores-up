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
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img className="m-2" src={logo} style={{ width: 30 }}></img>Scores Up</a>
                </div>
            </nav>
         );
    }
}
 
export default NavBar;