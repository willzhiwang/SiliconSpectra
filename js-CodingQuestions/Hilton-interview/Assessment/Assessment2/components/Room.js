import StyledRoom from "./styles/StyledRoom";
import StyledRoomName from "./styles/StyledRoomName";
import StyledRoomTitle from "./styles/StyledRoomTitle";
import StyledSelects from "./styles/StyledSelects";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  checkRoom,
  roomAutoChecks,
  setAdultsOrChildren
} from "../redux/actions/roomActions";

const Room = ({ room, checkRoom, roomAutoChecks, setAdultsOrChildren }) => {
  let option;
  if (!room.ableToCheck || room.checked) {
    option = false;
  } else {
    option = true;
  }

  return (
    <>
      <StyledRoom room={room}>
        <StyledRoomTitle room={room} className="title">
          {room.ableToCheck && (
            <input
              type="checkbox"
              checked={room.checked}
              onChange={() => {
                checkRoom(room.id);
                roomAutoChecks(room.id);
              }}
            />
          )}
          <span>
            <StyledRoomName>Room{room.id}</StyledRoomName>
          </span>
        </StyledRoomTitle>
        <StyledSelects>
          <div>
            <label htmlFor="adults">Adults</label>
            <p>(18+)</p>
            <select
              id="adults"
              disabled={option}
              value={room.adults}
              onChange={e => {
                setAdultsOrChildren(e, room.id);
              }}
            >
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div>
            <label htmlFor="children">Children</label>
            <p>(0-17)</p>
            <select
              id="children"
              disabled={option}
              value={room.children}
              onChange={e => {
                setAdultsOrChildren(e, room.id);
              }}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
        </StyledSelects>
      </StyledRoom>
    </>
  );
};
Room.propTypes = {
  room: PropTypes.object.isRequired,
  checkRoom: PropTypes.func.isRequired,
  roomAutoChecks: PropTypes.func.isRequired,
  setAdultsOrChildren: PropTypes.func.isRequired
};
export default connect(null, {
  checkRoom,
  roomAutoChecks,
  setAdultsOrChildren
})(Room);
