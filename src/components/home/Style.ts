import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  position: fixed;
  max-height: 100vh;
  margin-top: 25px;
  width: 99%;
`;
export const FooterHome = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  margin: auto;
  height: 5vh;
  width: 100%;
`;
export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 60px;
  gap: 5px;
  overflow-y: scroll;
  margin-bottom: 9vh;
`;
export const Card = styled.article`
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