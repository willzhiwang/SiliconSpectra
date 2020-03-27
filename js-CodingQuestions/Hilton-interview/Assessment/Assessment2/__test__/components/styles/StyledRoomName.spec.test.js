import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import StyledRoomName from "../../../components/styles/StyledRoomName";

test("Should properly render style component", () => {
  const tree = renderer.create(<StyledRoomName />).toJSON();
  expect(tree).toMatchSnapshot();
});
