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
  onFetchRobots: () => dispatch(fetchRobotsAction()), //dispatch(fetchRobotsAction()) because int the weird JS world it's defined in actions.js as a function in a function. LESSON: Stick to the context API. The world of React has changed.
});

class App extends Component {
  render() {
    return <MainPage {...this.props}/>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
