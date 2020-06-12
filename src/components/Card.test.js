import { shallow } from "enzyme";
import React from "react";
import Card from "./Card";

it("renders a card component", () => {
  const mockRobot = {
    id: 1,
    name: "John Doe",
    email: "john@doe.com",
  };
  expect(shallow(<Card robot={mockRobot} />)).toMatchSnapshot();
});
