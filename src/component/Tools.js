import React from 'react';
import './Tools.css';
import { Link } from 'react-router-dom';

class Tools extends React.Component {
    render() {
        return (
            <div className="card-container">
                <div className="card" style={{width: '10rem', margin: '10px'}}>
                    <img src={require('./assets/calculators.png')} className="card-img-top" alt="Calculator" />
                    <div className="card-body">
                        <h5 className="card-title">Calculator</h5>
                        <p className="card-text">quick and easy.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">free</li>
                    </ul>
                    <div className="card-body">
                    <Link to="/calculator" className="card-link">Open</Link>
                    </div>
                </div>

                <div className="card" style={{width: '18rem', margin: '10px'}}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Another Card title</h5>
                        <p className="card-text">Some more example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">First item</li>
                        <li className="list-group-item">Second item</li>
                        <li className="list-group-item">Third item</li>
                    </ul>
                    <div className="card-body">
                        <a href="#" className="card-link">First link</a>
                        <a href="#" className="card-link">Second link</a>
                    </div>
                </div>

                {/* Add more cards here */}
            </div>
        );
    }
}

export default Tools;