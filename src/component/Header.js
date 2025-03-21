import React from 'react';
import Logo from '../component/assets/Arcadia-logo.png';
import './Header.css'; // Import the CSS file

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar" style={{ backgroundColor: '#6200ea', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <div className="container-fluid" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <a className="navbar-brand d-flex align-items-center" href="#" style={{ color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src={Logo} alt="Logo" style={{ width: '50px', height: 'auto', marginBottom: '10px' }} />
                        <h2 className="gradient-text" style={{ fontFamily: 'Lucida Console' }}>ArcadiA</h2>
                        <p>Anything is Possible !</p>
                    </a>
                </div>
            </nav>
        );
    }
}

export default Header;