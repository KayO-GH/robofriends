import { shallow } from "enzyme";
import React from "react";
import MainPage from "./MainPage";

let wrapper;
beforeEach(() => {
  const mockProps = {
    robots: [],
    isPending: false,
    searchField: "",
    onSearchChange: jest.fn(),
    onFetchRobots: jest.fn(),
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

it("renders MainPage without crashing", () => {
  expect(wrapper).toMatchSnapshot();
});

it("renders MainPage as 'loading' when isPending is true", () => {
  const mockPropsLoading = {
    robots: [],
    isPending: true,
    searchField: "",
    onSearchChange: jest.fn(),
    onFetchRobots: jest.fn(),
  };
  const wrapperLoading = shallow(<MainPage {...mockPropsLoading} />);
  expect(wrapperLoading).toMatchSnapshot();
});

it("filters robots correctly", () => {
  const mockProps2 = {
    robots: [
      {
        id: 3,
        name: "John Doe",
        email: "john@example.com",
      },
    ],
    isPending: false,
    searchField: "john",
    onSearchChange: jest.fn(),
    onFetchRobots: jest.fn(),
  };
  const wrapper2 = shallow(<MainPage {...mockProps2} />);

  expect(wrapper2.instance().filterRobots()).toEqual([
    {
      id: 3,
      name: "John Doe",
      email: "john@example.com",
    },
  ]);
});

it("filters robots correctly 2", () => {
  const mockProps3 = {
    robots: [
      {
        id: 3,
        name: "John Doe",
        email: "john@example.com",
      },
    ],
    isPending: false,
    searchField: "a",
    onSearchChange: jest.fn(),
    onFetchRobots: jest.fn(),
  };

  const filteredRobots = [];

  const wrapper3 = shallow(<MainPage {...mockProps3} />);

  expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots);
});
