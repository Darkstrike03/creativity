import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        const linkStyle = {
            fontWeight: 'bold',
            fontSize: '18px',
            color: 'black'
        };

        return (
            <div>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/tools" style={linkStyle}>Tools</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/games" style={linkStyle}>Games</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/others" style={linkStyle}>Others</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Navbar;