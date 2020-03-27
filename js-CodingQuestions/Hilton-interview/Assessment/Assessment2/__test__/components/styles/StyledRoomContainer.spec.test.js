import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import StyledRoomContainer from "../../../components/styles/StyledRoomContainer";

test("Should properly render style component", () => {
  const tree = renderer.create(<StyledRoomContainer />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule("display", "flex");
  expect(tree).toHaveStyleRule("flex-direction", "row");
  expect(tree).toHaveStyleRule("justify-content", "start");
  expect(tree).toHaveStyleRule("align-items", "center");
});
