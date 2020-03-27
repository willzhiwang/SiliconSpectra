import styled from "styled-components";

const StyledRoom = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 140px;
  border-style: solid;
  ${({ room }) => {
    if (!room.ableToCheck || room.checked) {
      return `
      border-color: #ededed;
    `;
    } else {
      return `border-color: #b8b8b8;`;
    }
  }}
  border-radius: 5px;
  margin-bottom: 10px;
  margin-right: 10px;
`;

export default StyledRoom;
