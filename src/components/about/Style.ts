import styled from "styled-components";

export const Container = styled.main`
  text-align: justify;
  font-size: 16px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  gap: 30px;

    h2, h3 {
      text-align: center;
    }
    h2 {
      font-size: 24px;
    }
    h1 {
      font-size: 32px;    
    }
    img {
      margin: auto;    
    }
`;
export const Sumary = styled.div`
  width: 100%;
  margin-left: 0;
  gap: 10px;
`;