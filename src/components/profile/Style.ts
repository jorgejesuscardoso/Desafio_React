import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
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
    @media (min-width: 900px) {
      h3 {
        text-align: center;
        font-size: 20px;
      }
      
      form {
        width: 40%;
        margin: auto;
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
    background-color: var(--green-600);
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
export const ConfirmPass = styled.div`
  display: flex;
  align-items: center;
  height: 5vh;
  width: 97% !important;
`;
export const InputConfirmePass = styled.input`
  width: 42% !important;
  height: 3vh;
  text-indent: 10px;
  margin-left: 10px;
`;
export const ShowPassBTn = styled.button`
  height: 3vh;
  width: 30%;
  font-size: 14px;
  color: white;
  font-weight: 600;
  background-color: var(--gray-300);
`;

export const ProfileMain = styled.main`
  background-color: #aaa;
  display: flex;
  flex-direction: column;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 100%;
`;
export const ProfileContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 130vh;
  gap: 10px;
    h1 {
      margin-top: 20px;
      font-size: 20px;
    }

    @media (min-width: 900px) {
      height: 100vh;
      h1 {
        display: inline-block;
        position: fixed;
        font-size: 30px;
        right: 22%;
      }
    }
`;

export const ProfileCardContainer = styled.div`
  background-color: var(--gray-400-02);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  gap: 10px;
    h4 {
      font-weight: 400;
    }
    img {
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;
      box-shadow: 1px 1px 5px 1px #0000004d;
      width: 90%;
      border-radius: 5px;
    }

    @media (min-width: 500px) {
      img {
        width: 250px;
      }
    }

    @media (min-width: 900px) {
      position: fixed;
      right: 5%;
      flex-direction: row;
      width: 40%;
      img {
        position: fixed;
        width: 30%;
        max-width: 300px;
        max-height: 160px;
        right: 12%;
        top: 10%;
      }
      h1 {
        position: fixed;
        left: 15%;
        top: 40%;
        font-size: 50px;
        color: var(--gray-500);
      
      }
    }
    @media (min-width: 1400px) {
      img {
        max-height: 180px;
        right: 15.5%;
      }    
    }
`;
export const CardName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  width: 90%;
  font-size: 14px;
  font-weight: 600;
    
      button {
        background-color: var(--gray-300);
        width: 20%;
        height: 4vh;
        font-size: 12px;
        color: white;
        font-weight: 600;
        border-radius: 5px;
      }

      @media (min-width: 900px) {
            position: fixed;
            right: 17%;
            top: 30%;
            width: 17%;            
          button {
            position: fixed;
            right: 15.5%;
            top: 30%;
            width: 5%;
          }

          
      }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 10px;
      p {
        text-indent: 10px;
        display: flex;
        align-items: center;
        text-align: start;
        background-color: #ccc;
        height: 4vh;
        gap: 10px;
      }

      @media (min-width: 900px) {
        background-color: var(--gray-500);
        position: fixed;
        align-items: center;
        justify-content: center;
        right: 12%;
        top: 37%;
        width: 25%;
        height: 55%;
        p {
          width: 90%;
        }
      }
`;
export const FooterBtn = styled.div`
  background-color: var(--gray-200);
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 70vh;
  height: 5vh;

    button {
      background-color: var(--green-600);
      width: 25%;
      height: 4vh;
      font-size: 16px;
      color: white;
      font-weight: 600;
      border-radius: 3px;
    }

    @media (min-width: 900px) {
      position: fixed;
      right: 12%;
      bottom: 8px;
      width: 30%;
      height: 5vh;
    }
      
`;
export const DeletPerfilBtn = styled.button`
  background-color: darkslategray;
  width: 35%;
  height: 4vh;
  font-size: 16px;
  color: white;
  font-weight: 600;
  border-radius: 3px;
`;
export const MsgErroNotLogged = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  width: 100%;
    margin: auto;
  height: 100vh;
  color: red;
  font-size: 14px;
    span {
      color: var(--green-600);
    }
`;
export const MsgErro = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%;
  height: 4vh;
  font-size: 16px;
  color: white;
  font-weight: 600;
  border-radius: 3px;
    
    button {
      background-color: var(--green-600);
      width: 35%;
      height: 4vh;
      font-size: 16px;
      margin-top: 30px;
      color: white;
      font-weight: 600;
      border-radius: 3px;
    }
`;
export const HomeButton = styled.button`
  background-color: var(--blue-400);
  width: 25%;
  height: 4vh;
  font-size: 16px;
  margin-top: 50px;
  color: white;
  font-weight: 600;
  border-radius: 3px;
`;

export const EditPhoto = styled.img`

  @media (min-width: 900px) {
    margin: auto;
    margin-top: 20px;
    width: 250px;
  }
`;