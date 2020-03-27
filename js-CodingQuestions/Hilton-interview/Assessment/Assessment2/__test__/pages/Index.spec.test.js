import React from "react";
import renderer from "react-test-renderer";
import Index from "../../pages/index";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
const mockStore = configureStore([]);

describe("My Connected React-Redux Index Component", () => {
  let component;
  let store;
  beforeEach(() => {
    store = mockStore({
      roomObj: {
        rooms: [
          { id: 1, ableToCheck: false, adults: 1, children: 0 },
          { id: 2, ableToCheck: true, checked: false, adults: 1, children: 0 },
          { id: 3, ableToCheck: true, checked: false, adults: 1, children: 0 },
          { id: 4, ableToCheck: true, checked: false, adults: 1, children: 0 }
        ],
        checkedRooms: []
      }
    });

    component = renderer.create(
      <Provider store={store}>
        <Index roomObj={store.getState().roomObj} />
      </Provider>

      //   <Provider store={store}>
      //{
      /* {console.log(store.getState().roomObj)} */
      //}
      //   </Provider>
    );
  });
  it("should render with given state from Redux store", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
