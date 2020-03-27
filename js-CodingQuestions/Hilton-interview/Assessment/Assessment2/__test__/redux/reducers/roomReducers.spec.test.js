import * as types from "../../../redux/actions/types";
import roomReducers from "../../../redux/reducers/roomReducers";

it("Should return the initial state", () => {
  expect(roomReducers(undefined, {})).toEqual({
    rooms: [
      { id: 1, ableToCheck: false, adults: 1, children: 0 },
      { id: 2, ableToCheck: true, checked: false, adults: 1, children: 0 },
      { id: 3, ableToCheck: true, checked: false, adults: 1, children: 0 },
      { id: 4, ableToCheck: true, checked: false, adults: 1, children: 0 }
    ],
    checkedRooms: []
  });
});

it("Should return the CHECK_ROOM case", () => {
  expect(
    roomReducers([], {
      type: types.CHECK_ROOM,
      payload: [
        { id: 1, ableToCheck: false, adults: 1, children: 1 },
        { id: 2, ableToCheck: true, checked: false, adults: 1, children: 0 },
        { id: 3, ableToCheck: true, checked: false, adults: 2, children: 0 },
        { id: 4, ableToCheck: true, checked: false, adults: 1, children: 0 }
      ]
    })
  ).toEqual({
    rooms: [
      { id: 1, ableToCheck: false, adults: 1, children: 1 },
      { id: 2, ableToCheck: true, checked: false, adults: 1, children: 0 },
      { id: 3, ableToCheck: true, checked: false, adults: 2, children: 0 },
      { id: 4, ableToCheck: true, checked: false, adults: 1, children: 0 }
    ]
  });
});

it("Should return the SUBMIT_ROOM case", () => {
  expect(
    roomReducers([], {
      type: types.SUBMIT_ROOM,
      payload: [
        { id: 1, ableToCheck: false, adults: 1, children: 0 },
        { id: 2, ableToCheck: true, checked: false, adults: 1, children: 2 }
      ]
    })
  ).toEqual({
    checkedRooms: [
      { id: 1, ableToCheck: false, adults: 1, children: 0 },
      { id: 2, ableToCheck: true, checked: false, adults: 1, children: 2 }
    ]
  });
});
