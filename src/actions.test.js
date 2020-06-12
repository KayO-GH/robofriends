import * as actions from "./actions";

import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";

import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

const mockStore = configureMockStore([thunkMiddleware]);

describe("setSearchFieldAction", () => {
  it("should create an action to search robots", () => {
    const text = "wooo";
    const expectedAction = {
      type: CHANGE_SEARCHFIELD,
      payload: text,
    };

    expect(actions.setSearchFieldAction(text)).toEqual(expectedAction);
  });
});

describe("fetchRobotsAction", () => {
  it("handles fetching robots API", () => {
    const store = mockStore();
    store.dispatch(actions.fetchRobotsAction());//dispatch is needed for asynchronous actions
    const action = store.getActions();
    const expectedAction = {
      type: REQUEST_ROBOTS_PENDING,
    };
    expect(action[0]).toEqual(expectedAction);
  });
});
