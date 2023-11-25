import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 15px;
  margin-bottom: 10px ;
  box-shadow: 1px 1px 5px 1px #0000004d;
  width: 94%;
  border-radius: 7px;
  gap: 10px;

    //hover
    &:hover {
      box-shadow: 1px 1px 15px 5px var(--green-900-05);
      transition: 0.3s;
    }

  @media (min-width: 901px){
    width: 85%;
    max-height: 560px; 
      h3 {
      font-size: 16px;
      font-weight: 600;
      margin: 10px;
     }
  }
 

`;
export const IntroNews = styled.div`
  text-align: justify;
  padding: 10px;
  height: 100px;
  max-height: 100px;
  overflow: hidden;
`;
export const PostDate = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #000c005b;
`;
export const FooterCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  height: 40px ;
  max-height: 50px;
  width: 60%;
`;
export const FullNewsLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--green-600);
  font-size: 16px;
  font-weight: 600;
  height: 40px;
  width: 200px;

    a {
      color: var(--white);
    }
`;
export const CardImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  @media (min-width: 368px) {
    height: 250px;
  }
  @media (min-width: 480px) {
    height: 300px;
  }
  @media (min-width: 600px) {
    height: 350px;
  }
  @media (min-width: 800px)  and (max-width: 900px)  {
    height: 400px;
  }
  @media (min-width: 901px) and (max-width: 1024px)  {
    height: 200px;
  }
  @media (min-width: 1025px) {
    height: 250px;
    max-height: 250px;
    overflow: hidden;
  }
`;
export const DarkModeButton = styled.button`
  background-color: var(--gray-300);
  position: fixed;
  bottom: 11%;
  left: 2%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  z-index: 10000;
`;