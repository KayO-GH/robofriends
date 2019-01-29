import React, {useState, useEffect, Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from './ErrorBoundary';
import './App.css';

const App = () =>{
    //replace constructor and initial state with useState hooks
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');
    
    //Replace componentDidMount with useEffect hook
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => {
            setRobots(users);
        });
    });

    // to avoid problems with 'this' in your class fnxs, use arrow fxns
    const onSearchChange = (event) => {
        setSearchField(event.target.value);
    };

    
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase())
    });
    return !robots.length ?
        <h1 className="tc">Loading...</h1> :
        (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    
};

export default App;