import React from "react";
import renderer from "react-test-renderer";
import Room from "../../components/Room";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
const mockStore = configureStore([]);

describe("My Connected React-Redux Component", () => {
  let store;
  let component;
  beforeEach(() => {
    store = mockStore({
      rooms: [
        { id: 1, ableToCheck: false, adults: 1, children: 0 },
        { id: 2, ableToCheck: true, checked: false, adults: 1, children: 0 },
        { id: 3, ableToCheck: true, checked: false, adults: 1, children: 0 },
        { id: 4, ableToCheck: true, checked: false, adults: 1, children: 0 }
      ],
      checkedRooms: []
    });
    component = renderer.create(
      <Provider store={store}>
        {store.getState().rooms.map(room => {
          return <Room key={room.id} room={room} />;
        })}
      </Provider>
    );
  });
  it("should render with given state from Redux store", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
  //it("should dispatch an action on button click", () => {});
});
