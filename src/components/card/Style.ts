import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 20px ;
  box-shadow: 1px 1px 5px 1px #0000004d;
  width: 94%;
  border-radius: 7px;
  gap: 10px;
`;
export const IntroNews = styled.div`
  text-align: justify;
  padding: 10px;
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
`;