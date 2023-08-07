import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  column-count: 2;
  margin: 5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 25%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const InfoContainer = styled.div`
  color: #3e3e3e;
  letter-spacing: 0px;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
`;

const GeneralData = styled.h3`
  margin-top: 5rem;
  white-space: pre-wrap;
  font-size: 21px;
  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const Description = styled.p`
  margin-top: 5rem;
  width: 437px;
  font-size: 18px;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 2rem;
  }
`;

export { Container, Image, InfoContainer, Title, GeneralData, Description };
