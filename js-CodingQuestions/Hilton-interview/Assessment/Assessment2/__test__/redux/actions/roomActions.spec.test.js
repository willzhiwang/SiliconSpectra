import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "../../../redux/actions/roomActions";
import * as types from "../../../redux/actions/types";
import expect from "expect";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

it("creates CHECK_ROOM when a room has been checked", () => {
  const expectedActions = [
    { ableToCheck: false, adults: 1, children: 0, id: 1 },
    { ableToCheck: true, adults: 1, checked: false, children: 0, id: 2 },
    { ableToCheck: true, adults: 1, checked: true, children: 0, id: 3 },
    { ableToCheck: true, adults: 1, checked: false, children: 0, id: 4 }
  ];
  const store = mockStore({
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

  //check room 3
  expect(store.dispatch(actions.checkRoom(3))).toEqual(expectedActions);
});

it("when a room has been checked, and auto check/uncheck other rooms", () => {
  // when room 4 is checked, auto check room 2,3
  let expectedActions = [
    { ableToCheck: false, adults: 1, children: 0, id: 1 },
    { ableToCheck: true, adults: 1, checked: true, children: 0, id: 2 },
    { ableToCheck: true, adults: 1, checked: true, children: 0, id: 3 },
    { ableToCheck: true, adults: 1, checked: true, children: 0, id: 4 }
  ];
  let store = mockStore({
    roomObj: {
      rooms: [
        { id: 1, ableToCheck: false, adults: 1, children: 0 },
        { id: 2, ableToCheck: true, checked: false, adults: 1, children: 0 },
        { id: 3, ableToCheck: true, checked: false, adults: 1, children: 0 },
        { id: 4, ableToCheck: true, checked: true, adults: 1, children: 0 }
      ],
      checkedRooms: []
    }
  });
  //store.dispatch(actions.roomAutoChecks(4));
  expect(store.dispatch(actions.roomAutoChecks(4))).toEqual(expectedActions);

  // when room 2 is unchecked, auto uncheck room 3,4
  expectedActions = [
    { ableToCheck: false, adults: 1, children: 0, id: 1 },
    { ableToCheck: true, adults: 1, checked: false, children: 0, id: 2 },
    { ableToCheck: true, adults: 1, checked: false, children: 0, id: 3 },
    { ableToCheck: true, adults: 1, checked: false, children: 0, id: 4 }
  ];
  store = mockStore({
    roomObj: {
      rooms: [
        { id: 1, ableToCheck: false, adults: 1, children: 0 },
        { id: 2, ableToCheck: true, checked: false, adults: 1, children: 0 },
        { id: 3, ableToCheck: true, checked: true, adults: 1, children: 0 },
        { id: 4, ableToCheck: true, checked: true, adults: 1, children: 0 }
      ],
      checkedRooms: []
    }
  });
  //store.dispatch(actions.roomAutoChecks(4));
  expect(store.dispatch(actions.roomAutoChecks(2))).toEqual(expectedActions);
});

it("choose number of adults or children", () => {
  //set 2 adults for room 2
  let expectedActions = [
    { ableToCheck: false, adults: 1, children: 0, id: 1 },
    { ableToCheck: true, adults: 2, checked: false, children: 0, id: 2 },
    { ableToCheck: true, adults: 1, checked: false, children: 0, id: 3 },
    { ableToCheck: true, adults: 1, checked: false, children: 0, id: 4 }
  ];
  let store = mockStore({
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
  // room 2 has 2 adults
  let e = { target: { id: "adults", value: 2 } };
  expect(store.dispatch(actions.setAdultsOrChildren(e, 2))).toEqual(
    expectedActions
  );

  //set 0 children for room 1
  expectedActions = [
    { ableToCheck: false, adults: 1, children: 0, id: 1 },
    { ableToCheck: true, adults: 1, checked: false, children: 2, id: 2 },
    { ableToCheck: true, adults: 1, checked: false, children: 2, id: 3 },
    { ableToCheck: true, adults: 1, checked: false, children: 2, id: 4 }
  ];
  store = mockStore({
    roomObj: {
      rooms: [
        { id: 1, ableToCheck: false, adults: 1, children: 2 },
        { id: 2, ableToCheck: true, checked: false, adults: 1, children: 2 },
        { id: 3, ableToCheck: true, checked: false, adults: 1, children: 2 },
        { id: 4, ableToCheck: true, checked: false, adults: 1, children: 2 }
      ],
      checkedRooms: []
    }
  });
  // room 1 has 0 children
  e = { target: { id: "children", value: 0 } };
  expect(store.dispatch(actions.setAdultsOrChildren(e, 1))).toEqual(
    expectedActions
  );
});

it("click submit button to submit rooms", () => {
  //checked 3 rooms
  const expectedActions = [
    { id: 1, ableToCheck: false, adults: 1, children: 0 },
    { id: 2, ableToCheck: true, checked: true, adults: 1, children: 0 },
    { id: 3, ableToCheck: true, checked: true, adults: 1, children: 0 }
  ];
  const store = mockStore({
    roomObj: {
      rooms: [
        { id: 1, ableToCheck: false, adults: 1, children: 0 },
        { id: 2, ableToCheck: true, checked: true, adults: 1, children: 0 },
        { id: 3, ableToCheck: true, checked: true, adults: 1, children: 0 },
        { id: 4, ableToCheck: true, checked: false, adults: 1, children: 0 }
      ],
      checkedRooms: []
    }
  });
  expect(store.dispatch(actions.submitRooms())).toEqual(expectedActions);
});
