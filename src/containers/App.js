import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";

import { setSearchFieldAction, fetchRobotsAction } from "../actions";
import Header from "../components/Header";

//the state passed in here is the state from the root reducer
const mapStateToProps = (state) => ({
  searchField: state.searchRobotsReducer.searchField,
  robots: state.fetchRobotsReducer.robots,
  isPending: state.fetchRobotsReducer.isPending,
  error: state.fetchRobotsReducer.error,
});

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchFieldAction(event.target.value)),
  onFetchRobots: () => fetchRobotsAction(dispatch), //could very well have been dispatch(fetchRobotsAction()), but let's preserve our sanity, seeing how the function was actually defined in actions.js
});

class App extends Component {
  componentDidMount() {
    this.props.onFetchRobots();
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return isPending ? (
      <h1 className="tc">Loading...</h1>
    ) : (
      <div className="tc">
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
