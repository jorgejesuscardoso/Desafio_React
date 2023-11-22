import styled from "styled-components";

export const Form = styled.form`
  background-color: var(--white);
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  right: 25%;
  top: 35%;
  border: 1px solid #000c005b;
  border-radius: 5px;
  width: 50%;
  height: 30vh;
  z-index: 999;
`;
export const DivDate = styled.div`
  display: flex;
  flex-direction: column;  
  font-size: 14px;
  width: 80%;
  height: 50px;
  gap: 5px;
  
    input {
      text-align: center;
      width: 100%;
      height: 4vh;
    }
`;
export const SearchBtn = styled.button`
  background-color: var(--green-500);
  color: white;
  width: 50%;
  height: 4vh;
  font-size: 16px;
`;
export const CloseBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 20px;
  height: 20px;
  top: 35%;
  right: 25%;
`;
export const ErrMsgDiv = styled.div`
  text-align: center;
  display: flex;
  width: 100%;
  color: red;
  font-size: 14px;
`;
