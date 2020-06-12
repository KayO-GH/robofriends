import { shallow} from "enzyme";
import React from "react";
import Card from "./Card";

it("renders a card component", () => {
  expect(shallow(<Card robot={{}} />)).toMatchSnapshot();
});
