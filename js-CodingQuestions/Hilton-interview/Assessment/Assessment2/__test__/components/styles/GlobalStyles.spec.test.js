import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import GlobalStyle from "../../../components/styles/GlobalStyles";

test("Should properly render style component", () => {
  const tree = renderer.create(<GlobalStyle />).toJSON();
  expect(tree).toMatchSnapshot();
});
