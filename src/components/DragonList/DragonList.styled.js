import styled from 'styled-components';

export const DragonListStyled = styled.ul`
  list-style: none;
  padding: 0;
  width: 400px;
`;

export const DragonListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  span {
    margin: 5px;
  }
`;

export const DragonListImage = styled.img`
  width: 150px;
  height: 100px;
  object-fit: cover;
  margin-left: 20px;
  border-radius: 10px;
  box-shadow: 5px 5px 15px 5px #000000;
`;
