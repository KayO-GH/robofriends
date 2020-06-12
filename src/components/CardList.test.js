import { shallow } from "enzyme";
import React from "react";
import CardList from "./CardList";

it("renders a CardList component", () => {
  const mockRobots = [
    {
      id: 1,
      name: "John Doe",
      email: "john@doe.com",
    },
  ];
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
