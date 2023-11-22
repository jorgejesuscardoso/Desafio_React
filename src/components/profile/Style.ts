import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100vh;
`;
export const Container = styled.div`
  width: 90%;
  margin: auto;
  text-indent: 10px;

    h3, h4 {
      text-align: start;
      margin: 10px 0;
    }
   
  form {
      background-color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 15px;
      box-shadow: 1px 1px 5px 1px #0000004d;
      border-radius: 8px;
      width: 100%;
      gap: 5px;      
      text-indent: 10px;

      input {
        display: flex;
        flex-direction: column;
        text-indent: 10px;
        width: 80%;
        height: 3.5vh;
        outline: none;
        margin-top: 1px;
        margin-left: 10px;
        margin-bottom: 10px;
      }
    }
`;
export const EditButtonFooter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: top;
  margin-top: 20px;
  width: 100%;
  height: 9vh;

  button {
    background-color: rgb(0, 150, 50);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35%;
    height: 4vh;
    font-size: 16px;
    color: white;
    font-weight: 600;
    border-radius: 3px;
  }
`;
export const ShowPassBTn = styled.button`
  height: 3vh;
  width: 30%;
  font-size: 14px;
  color: white;
  font-weight: 600;
  background-color: rgb(107, 107, 107);
`;