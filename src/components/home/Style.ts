import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  position: fixed;
  max-height: 100vh;
  margin-top: 25px;
  width: 99%;

    @media (min-width: 768px) {
      margin-top: 80px;
      position: relative;
      max-height: 100%;
    }
`;
export const FooterHome = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  margin: auto;
  height: 5vh;
  width: 100%;

    @media (min-width: 768px) {
      display: none;
    }
`;
export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 60px;
  overflow-y: scroll;
  margin-bottom: 15vh;

    @media (min-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-items: center;
      overflow: none;
    }

`;
export const Card = styled.article`
  @media (min-width: 901px) and (max-width: 1024px)  {
    width: 50%;
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
    width: 45%;
  }
  @media (min-width: 1201px) {
    width: 20%;
  }
`;
export const ErrMsg = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 80%;
  height: 80vh;
  gap: 10px;

    button {
      background-color: var(--green-500);
      color: white;
      font-size: 16px;
      font-weight: 600;
      width: 50%;
      height: 4vh;
    }
`;
export const PopUpAlert = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  width: 63%;
  height: 12vh;
  font-size: 16px;
  color: white;
  font-weight: 600;
  top: 35%;
  right: 18%;
  border-radius: 7px;
  background-color: var(--green-500);

    button {
      background-color: var(--Black-opacity-05);
      width: 10%;
      height: 3vh;
      color: var(--white);
      font-size: 20px;
    }
`;