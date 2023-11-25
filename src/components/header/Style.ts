import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: var(--white );
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  border-bottom: 1px solid #000c005b;
  width: 100%;
  max-height: 50px;
  z-index: 99;
  overflow: hidden;

    @media (min-width: 768px) {
      height: 100px;
      max-height: 120px;
      top: 0;
      align-items: center;
    }
`;
export const Icones = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

    @media (min-width: 768px) {
      width: 30%;
    }
`;
export const UserNameHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgb(0, 110, 0);
  font-weight: 600;
  width: 22vh;
    
    h2 {
      font-size: 1.5rem;
    }
    img {      
      margin-left: 0;
      width: 5vh;
      height: 4.5vh;
      border: none;
      border-radius: 20px;
    }

    @media (min-width: 768px) {
      height: 95px;
      align-items: center;

      h2 {
        font-size: 2rem;      
      }
      img {
        margin-left: 20px;
        width: 8vh;
        height: 7vh;
      }
    }
`;
export const Logo = styled.img`
  width: 70px;

    @media (min-width: 768px) {
      width: 100px;
    }
`;
export const Ico = styled.img`
  width: 20px;
   
    @media (min-width: 768px) {
      width: 30px;
      height: 40%;
    }
`;
export const Search = styled.div`
  background-color: #ccc;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  top: 0;
  left: 10%;
  max-height: 50px;
  gap: 10px;
  z-index: 99;

    input {
      width: 35%;
      height: 30px;
      border-radius: 5px;
      padding-left: 10px;
    }
    
     form {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 100%;
      height: 100%; 
    }

    @media (min-width: 768px) {
      height: 100px;
      max-height: 100px;
      top: 0;
      align-items: center;
      justify-content: space-evenly;

      input {
        width: 40%;
        height: 50px;
      }
      form {
        width: 100%;
        height: 100%; 
      }
      button {
        width: 5%;
        height: 50px;
      
      }
    }
`;
export const SearchButton = styled.button` 
  height: 30px;
  border-radius: 5px;
  background-color: rgb(0, 150, 50);
  color: white;
    
    @media (min-width: 768px) {
      height: 50px;
    }

`;
export const CloseSearch = styled.button`
  width: 20%;
  height: 30px;
  border-radius: 5px;
  background-color: white;

    @media (min-width: 768px) {
      position: fixed;
      height: 50px;
      width: 15%;
      right: 10px;
    }
`;
export const MenuHeader = styled.div`
  background-color: var(--green-900-05);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  width: 27%;
  top: 49px;
  right: 1%;
  height: 23vh;
  z-index: 99;
    
    button {
    background-color: var(--white);
    width: 100%;
    height: 3.5vh;
    font-size: 14px;
    color: var(--gray-300);
    font-weight: 600;
    border-radius: 7px;
    margin: auto;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 90%;
  }
  li {
    text-align: center;
  }

  @media (min-width: 768px) {
    top: 100px;
    width: 8%;
    height: 15vh;
    button {
      height: 2.5vh;
      font-size: 16px;
    }
    h2 {
      font-size: 16px;
    }
  }
`;
export const TopFilterContainer = styled.div`
  background-color: white;
  position: fixed;
  top: 57px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4.2vh;
  gap: 2px;

    button {
      width: 19%;
      height: 3.5vh;
      font-weight: 600;
    }

    @media (min-width: 768px) {
      height: 5vh;
      top: 100px;
    }
`;
export const UserNameConnected = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;