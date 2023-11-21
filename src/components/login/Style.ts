import styled from "styled-components";

export const ErrUserConnectedContainer = styled.div`

  background-color: white;
  display: flex;
  flex-direction: column;
  height: 10vh;
  width: 80%;
  margin: auto;

  h3 {
  color: red;
  text-align: center;
  font-size: 16px;
  margin: 10px;
  }

  p {
    text-align: center;
    font-size: 16px;
    margin: 10px;
  }

  span {
  color: green;
  font-weight: 600;
  }
  button {
    background-color: #00c800;
    width: 30%;
    height: 4vh;
    font-size: 16px;
    color: white;
    font-weight: 600;
    margin: auto;
    border-radius: 3px;
  }
`