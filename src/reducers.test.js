import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";

import * as reducers from "./reducers";

describe("searchRobots", () => {
  const initialStateSearch = {
    searchField: "",
  };
  it("should return the initial state", () => {
    expect(reducers.searchRobotsReducer(undefined, {})).toEqual(
      initialStateSearch
    );
  });

  it("should handle CHANGE_SEARCHFIELD", () => {
    expect(
      reducers.searchRobotsReducer(initialStateSearch, {
        type: CHANGE_SEARCHFIELD,
        payload: "abc",
      })
    ).toEqual({ searchField: "abc" });
  });
});

describe("fetchRobots", () => {
  const initialStateRobots = {
    robots: [],
    isPending: false,
    error: "",
  };

  it("should return the initial state", () => {
    expect(reducers.fetchRobotsReducer(undefined, {})).toEqual(
      initialStateRobots
    );
  });

  it("should handle REQUEST_ROBOTS_PENDING action", () => {
    expect(
      reducers.fetchRobotsReducer(initialStateRobots, {
        type: REQUEST_ROBOTS_PENDING,
      })
    ).toEqual({ ...initialStateRobots, isPending: true });
  });

  it("should handle REQUEST_ROBOTS_SUCCESS action", () => {
    expect(
      reducers.fetchRobotsReducer(initialStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [
          {
            id: "123",
            name: "test",
            email: "test@gmail.com",
          },
        ],
      })
    ).toEqual({
      robots: [
        {
          id: "123",
          name: "test",
          email: "test@gmail.com",
        },
      ],
      isPending: false,
      error: "",
    });
  });

  it("should handle REQUEST_ROBOTS_FAILED action", () => {
    expect(
      reducers.fetchRobotsReducer(initialStateRobots, {
        type: REQUEST_ROBOTS_FAILED,
        payload: "Oops",
      })
    ).toEqual({
      isPending: false,
      error: "Oops",
      robots: [],
    });
  });
});
