import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import StyledSelects from "../../../components/styles/StyledSelects";

test("Should properly render style component", () => {
  const tree = renderer.create(<StyledSelects />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule("display", "flex");
  expect(tree).toHaveStyleRule("flex-direction", "row");
  expect(tree).toHaveStyleRule("justify-content", "space-evenly");
});
