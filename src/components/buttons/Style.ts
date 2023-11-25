import styled from "styled-components";

export const PrevNextPageBtn = styled.button`
  background-color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  color: #000c00;
  border: 1px solid #000c005b;
  font-size: 23px;
`;
export const ContainerFooterMenu = styled.div`
  background-color: var(--green-900-05);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  bottom: 5vh;
  right: 0;
  width: 33%;
  height: 29vh;
  border-radius: 5px 5px 0 0;
  z-index: 99;
  gap: 3px;

    button {
      background-color: var(--white);
      width: 80%;
      height: 4vh;
      font-weight: bold;
      color: var(--gray-300);
      margin: auto;
      border-radius: 5px;
    }
`;
export const TitleFooterMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2%;
  background-color: var(--white);
  color: rgb(0, 109, 0);
  height: 4vh;
  width: 80%;
  border-radius: 5px;

    h3 {
      font-size: 16px;
    }
`;
export const FilterFooterMenu = styled.div`
  width: 20%;
  background-color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000c005b;

    img {
      width: 20px;
      height: 25px;
    }
`;

export const FilterBtnTop = styled.button`
  font-size: 13px;
  font-weight: 600;
  width: 19%;
  border: none;
  background-color: #cccccc4f ;
  color: rgb(100, 100, 100);
  border-radius: 5px;
  box-shadow: 0px 0px 2px 0px rgb(0, 100, 0);

    &:hover {
      background-color: #cccccc4f ;
      color: rgb(0, 100, 0);
      border: 1px solid rgb(0, 100, 0);
    }
`;