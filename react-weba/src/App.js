import React from 'react';
import HistoryPage from './HistoryPage';
import HowToPlayPage from './HowToPlayPage';
import CardCounterPage from './CardCounter';
import BasicStrategyPage from './BasicStrategy';

import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { page: 'home' };
    }

    setPage = (page) => {
        this.setState({ page });
    }

    render() {
        let pageComponent;
        switch (this.state.page) {
            case 'history':
                pageComponent = <HistoryPage />;
                break;
            case 'how-to-play':
                pageComponent = <HowToPlayPage />;
                break;
            case 'card-counter':
                pageComponent = <CardCounterPage style={{ backgroundColor: 'blue', color: 'white' }} />;
                break;
            case 'basic-strategy':
                pageComponent = <BasicStrategyPage />;
                break;
            default:
                pageComponent = <div>Welcome to Home Page</div>;
        }

        return (
            <div>
                <nav>
                    <ul className="menu">
                        <li onClick={() => this.setPage('home')}>Home</li>
                        <li onClick={() => this.setPage('history')}>History</li>
                        <li onClick={() => this.setPage('how-to-play')}>How to Play</li>
                        <li onClick={() => this.setPage('card-counter')}>Card Counter</li>
                        <li onClick={() => this.setPage('basic-strategy')}>Basic Strategy</li>
                    </ul>
                </nav>
                {pageComponent}
            </div>
        );
        }
    
}




export default App;