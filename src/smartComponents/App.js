import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../functionalComponents/CardList';
import SearchBox from '../functionalComponents/SearchBox';
import Scroll from '../functionalComponents/Scroll';
import ErrorBoundary from './ErrorBoundary';
import './App.css';

import { setSearchFieldAction } from '../actions';

//the state passed in here is the state from the root reducer
const mapStateToProps = state => ({
    searchField: state.searchField
});

const mapDispatchToProps = dispatch => ({
    onSearchChange: (event) => dispatch(setSearchFieldAction(event.target.value))
});

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => {
                this.setState({ robots: users })
            });
    }

    render() {
        const { robots } = this.state;
        const { searchField, onSearchChange } = this.props;
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
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);