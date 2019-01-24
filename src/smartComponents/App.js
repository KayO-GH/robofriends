import React, { Component } from 'react';
import CardList from '../functionalComponents/CardList';
import SearchBox from '../functionalComponents/SearchBox';
import Scroll from '../functionalComponents/Scroll';
import ErrorBoundary from './ErrorBoundary';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => {
                this.setState({ robots: users })
            });
    }

    // to avoid problems with 'this' in your class fnxs, use arrow fxns
    onSearchChange = (event) => {
        this.setState({ searchFiecomponentsld: event.target.value });
    }

    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        });
        return !robots.length ?
            <h1 className="tc">Loading...</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
    }
};

export default App;