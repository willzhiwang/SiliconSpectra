import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import StyledRoomTitle from "../../../components/styles/StyledRoomTitle";

const checkedRoom = {
  id: 2,
  ableToCheck: true,
  checked: true,
  adults: 1,
  children: 0
};

test("Should properly render style component", () => {
  const tree = renderer.create(<StyledRoomTitle room={checkedRoom} />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule("padding-left", "0.1em");
  expect(tree).toHaveStyleRule("display", "flex");
  expect(tree).toHaveStyleRule("flex-direction", "row");
  expect(tree).toHaveStyleRule("justify-content", "start");
  expect(tree).toHaveStyleRule("align-items", "center");
  expect(tree).toHaveStyleRule("margin-bottom", "0.2em");
  expect(tree).toHaveStyleRule("background-color", "#ededed");
});
const uncheckedRoom = {
  id: 3,
  ableToCheck: true,
  checked: false,
  adults: 1,
  children: 0
};

test("Should properly render style component", () => {
  const tree = renderer
    .create(<StyledRoomTitle room={uncheckedRoom} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule("padding-left", "0.1em");
  expect(tree).toHaveStyleRule("display", "flex");
  expect(tree).toHaveStyleRule("flex-direction", "row");
  expect(tree).toHaveStyleRule("justify-content", "start");
  expect(tree).toHaveStyleRule("align-items", "center");
  expect(tree).toHaveStyleRule("margin-bottom", "0.2em");
  expect(tree).toHaveStyleRule("background-color", "#b8b8b8");
});
