import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

import { setSearchFieldAction, fetchRobotsAction } from "../actions";
import MainPage from "../components/MainPage";

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
  render() {
    return <MainPage {...this.props}/>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
