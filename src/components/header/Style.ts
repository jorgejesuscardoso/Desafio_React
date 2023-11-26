import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: var(--white );
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  border-bottom: 1px solid #000c005b;
  width: 100%;
  height: 50px;
  z-index: 99;
  overflow: hidden;

    @media (min-width: 768px) {
      height: 50px;
      max-height: 120px;
      top: 0;
      align-items: center;
    }
`;
export const Icones = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;

    @media (min-width: 768px) {
      width: 20%;
      height: 100%;

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
  max-height: 40px;
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
      height: 50px;
      max-height: 50px;
      top: 0;
      align-items: center;
      justify-content: space-evenly;

      input {
        width: 60%;
        height: 40px;
      }
      form {
        width: 40%;
        height: 100%; 
      }
      
    }
`;
export const SearchButton = styled.button` 
  height: 30px;
  border-radius: 5px;
  background-color: rgb(0, 150, 50);
  color: white;
    
    @media (min-width: 768px) {
      width: 9%;
      height: 40px;
    }

`;
export const CloseSearch = styled.button`
  width: 20%;
  height: 30px;
  border-radius: 5px;
  background-color: transparent;

    @media (min-width: 768px) {
      position: fixed;
      height: 50px;
      width: 15%;
      right: 0;
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
  right: 0;
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
    top: 50px;
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
  @media (min-width: 500px) {
    top: 50px;
    width: 12%;
    height: 15vh;
    button {
      height: 2.5vh;
    }
  }
  @media (min-width: 1024px) {
    top: 50px;
    width: 13%;
    height: 17vh;
    button {
      height: 2.7vh;
      font-size: 16px;
    }
    h2 {
      font-size: 16px;
    }
  }
  @media (min-width: 1200px) {
    top: 50px;
    width: 7%;
    height: 17vh;
    button {
      height: 2.7vh;
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
      background-color: transparent;
      width: 19%;
      height: 3.5vh;
      font-weight: 600;
      color: var(--gray-300);
    }

    @media (min-width: 768px) {
      height: 5vh;
      top: 100px;
      background-color: var(--gray-200);
      button {
        font-size: 16px;
        border-radius: 0;
        box-shadow: 0px 0px 0px 0px;
      }
    }
    @media (min-width: 1024px) {
      height: 5vh;
      top: 50px;
      background-color: var(--gray-200);
      gap: 7px;
     
    }
`;