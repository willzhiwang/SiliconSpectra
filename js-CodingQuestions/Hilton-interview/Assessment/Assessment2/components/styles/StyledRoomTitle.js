import styled from "styled-components";

const StyledRoomTitle = styled.div`
  padding-left: 0.1em;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  ${({ room }) => {
    if (!room.ableToCheck || room.checked) {
      return `
      background-color: #ededed;
    `;
    } else {
      return `background-color: #b8b8b8;`;
    }
  }}
  margin-bottom: 0.2em;
`;
export default StyledRoomTitle;
