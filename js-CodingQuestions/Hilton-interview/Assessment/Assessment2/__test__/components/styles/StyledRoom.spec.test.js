import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import StyledRoom from "../../../components/styles/StyledRoom";

const room = {
  id: 2,
  ableToCheck: true,
  checked: true,
  adults: 1,
  children: 0
};

test("Should properly render style component", () => {
  const tree = renderer.create(<StyledRoom room={room} />).toJSON();
  expect(tree).toMatchSnapshot();
});
