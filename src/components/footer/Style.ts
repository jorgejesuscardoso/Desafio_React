import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: var(--gray-300);
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50vh;
  gap: 10px;
  
  @media (max-width: 768px){
    display: none;
  }
  @media (min-width: 768px) {
    height: 40vh;
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
      color: var(--white);
      display: inline-block;
      font-size: 16px;
    }
    p {
      color: var(--white);
      font-size: 16px;
    }

`;


