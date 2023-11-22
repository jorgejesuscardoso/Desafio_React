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
`
export const Container = styled.main`
  background-image: url('src/assets/bnLogo.png');
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

    form {
      background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 1px 5px 1px #000000a6;
    border-radius: 8px;
    width: 70%;
    height: 40vh;
    gap: 5px;
    }
`;
export const FooterFormLogin = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
  width: 100%;
  height: 4vh;
  border-top: 1px solid #000c005b;
  
    button {
      font-size: 14px;
    }
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  font-size: 16px;
  gap: 5px;

    input {
      height: 3.7vh;
      border-radius: 3px;
      border: 1px solid #000c005b;
      padding-left: 10px;
    }
  `;
export const LoginError = styled.div`
  position: fixed;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  top: 71%;
  height: 9vh;
  width: 150px;
  gap: 10px;
`;
export const LoginButton = styled.button` 
  background-color: #0fc800;
  margin: auto;
  width: 50%;
  height: 4vh;
  margin-top: 10px;
  font-size: 16px;
  color: white;
  font-weight: 600;
  border-radius: 3px;
`;