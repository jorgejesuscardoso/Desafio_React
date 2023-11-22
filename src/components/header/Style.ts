import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  border-bottom: 1px solid #000c005b;
  width: 100%;
  max-height: 50px;
  z-index: 99;
  overflow: hidden;
`;
export const Icones = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
export const UserNameHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgb(0, 110, 0);
  font-weight: 600;
  width: 30%;
    p {
      font-size: 16px;
    }
    img {      
      margin-left: 0;
      width: 5vh;
      border: none;
      border-radius: 15px;
    }
`;
export const Logo = styled.img`
  width: 70px;
`;
export const Ico = styled.img`
  width: 20px
`;
export const Search = styled.div`
  background-color: #ccc;
  height: 50px;
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  max-height: 50px;
  gap: 100px;
  z-index: 99;

    input {
      width: 55%;
      height: 30px;
      border-radius: 5px;
      padding-left: 10px;
    }
    button {
      width: 20%;
      height: 30px;
      border-radius: 5px;
      background-color: rgb(0, 150, 50);
      color: white;
    }
     form {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 80%;
      height: 100%; 
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
  border-radius: 4px;
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
    }
`;