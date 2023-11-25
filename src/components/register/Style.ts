import styled from "styled-components";

export const Main = styled.main`
  background-image: URL('src/assets/bnLogo.png');
  display: flex;
  flex-direction: column;
  margin: auto;
  width:100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.925);

    form {
      background-color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow: 1px 1px 5px 1px rgba(100, 155, 200, 1);
      justify-content: center;
      border-radius: 7px;
      font-size: 16px;
      width: 88%;
      margin: auto;
      margin-top: 50px;
      height: 70%;
      gap: 5px;

        
    }
    @media (min-width: 400px) and (max-width: 550px) {
      width: 80%;
      input {
          width: 280px
        }
    }
    @media (min-width: 551px) and (max-width: 768px) {
      width: 70%;
    }
    @media (min-width: 768px) and (max-width: 1000px) {
      form {
        width: 65%;
      }
    }
    @media (min-width: 1001px) and (max-width: 1200px) {
      form {
        width: 30%;
      }
    }
    @media (min-width: 1201px) {
      form {
        width: 25%;
      }
    }

`;
export const Page0and1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const ErrMsgPage0 = styled.div`
  width: 100%;
  color: var(--red);

    p {
      font-size: 14px;
    }


`;
export const PagesContent = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Page2 = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-size: 15px;
  width: 70%;
  top: 35%;
  gap: 5px;

    img {
      position: fixed;
      top: 12%;
      left: 29%;
      width: 150px;
    }

    @media (min-width: 400px) and (max-width: 550px) {
      width: 60%;
        img {
          top: 9%;
          left: 35%;
        }
    }
    @media (min-width: 550px) and (max-width: 768px) {
      width: 40%;
        img {
          left: 37%;
        }
    }

    @media (min-width: 768px) {
      width: 25%;
      top: 32%;
        img {
          top: 9%;
          left: 41%;
        }
    }
    @media (min-width: 1200px) {
      width: 20%;
      top: 30%;
        img {
          left: 44.5%;
        }
    
    }
`;
export const Page3 = styled.div`
  text-align: center;
  position: fixed;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-size: 15px;
  width: 70%;
  top: 45%;
  gap: 10px;

    @media (min-width: 768px) {
      
    }
`;
export const MsgErrDiv = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-size: 14px;
  width: 80%;
  top: 71%;
`;
export const ErrToRegister = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 60%;
  left: 15%;
  color: var(--red);
`;
export const DivUserRegistered = styled.div`
background-color: var(--white);
position: fixed;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 15px;
width: 80%;
height: 20%;
top: 40%;
left: 10%;
color: var(--green-700);
font-weight: 600;
border-radius: 7px;
border: 1px solid var(--green-700);
gap: 5px;

    button {
      background-color: var(--green-700);
      width: 30%;
      height: 5vh;
      font-size: 16px;
      color: white;
      font-weight: 600;
      border-radius: 5px;
    }

    @media (min-width: 768px) {
      button {
        width: 15%;
      }
    }
`;
export const Foto = styled.img`
  width: 150px;
  margin: auto;
  margin-top: -300px;
  margin-bottom: 20%;
  
`;
export const ContainerFoto = styled.div`
  margin: auto;
`;
export const NavigateBtn = styled.div`
  position: fixed;
  top: 80vh;
  display: flex;
  justify-content: space-between;
  width: 64%;
  height: 7vh;
  gap: 5px;

  @media (min-width: 768px) {
    width: 40%;
  }

`;
export const PageNavigateBtn = styled.button`
  margin: auto;
  background-color: rgb(0, 150, 0);
  width: 50%;
  height: 4vh;
  margin-top: 10px;
  font-size: 16px;
  color: white;
  font-weight: 600;
  border-radius: 5px;
  bottom: 0;
    
    @media (min-width: 768px) {
      width: 40%;
    }
    @media (min-width: 1000px) {
      width: 30%;
    }
`;
export const HomeNavigateBtnDiv = styled.div`
  background-color: var(--white);
  position: fixed;
  top: 1%;
  left: 85%;
  width: 87%;
  color: black;
  font-size: 16px;

    button {
      width: 15%;
      height: 5vh;
      font-size: 15px;
      color: var(--green-700);
      font-weight: 600;
      border-radius: 5px;
      border: 1px solid blue;
    }
`;
export const Logo = styled.img`
  position: fixed;
  top: 8%;
  right:6%;
  width: 25%;
  height: 10%;

    @media (min-width: 400px) {
      right: 15%;
    }
    @media (min-width: 550px) {
      right: 20%;
    }
    @media (min-width: 1000px) {
      top: 5%;
      right: 35%;
      width: 15%;
    }
    @media (min-width: 1200px) {
      top: 5%;
      right: 40%;
      width: 10%;
    }

`;
export const BtnRegister = styled.button`
  position: fixed;
  background-color: var(--blue-400);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  top: 70vh;
  right: 25%;
  width: 50%;
  height: 4vh;
  gap: 5px;

    @media (min-width: 500px) {
      width: 30%;
      right: 35%;
    }
    @media (min-width: 768px) {
      width: 20%;
      right: 40%;
    }
    @media (min-width: 1000px) {
      width: 15%;
      right: 43%;
    }
`;
export const MsgHaveAccount = styled.div`
  background-color: rgb(179, 179, 179);
  position: fixed;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 7vh;
  bottom: 0;
  left: 0;
  font-size: 17px;

      button  {
        background-color: rgb(0, 50, 255);
        width: 30%;
        height: 4vh;
        font-size: 16px;
        color: white;
        font-weight: 600;
        border-radius: 5px;
      }
    @media (min-width: 550px) and (max-width: 768px) {
      font-size: 15px;
      button {
        width: 20%;
      }
    }
    @media (min-width: 768px) and (max-width: 1200px) {
      font-size: 18px;
      button {
        width: 15%;
      }
    }

    @media (min-width: 1201px) {
      font-size: 18px;
      button {
        width: 10%;
      }
    }
`;