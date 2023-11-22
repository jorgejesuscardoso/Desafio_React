import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #ccc;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50vh;
  gap: 10px;
  bottom: 0;

  @media (min-width: 768px) {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 30vh;
    gap: 10px;
    top: 100vh;
    bottom: 0;
  }
`;
export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  height: 100%;
  gap: 10px;
    a {
      color: var(--blue-400)
    }
    ul {
      margin-top: 10px;
    }
    span {
      display: inline-block;
      margin-top: 20px;
      font-size: 16px;
    }
`;


