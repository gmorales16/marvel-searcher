import { styled } from "styled-components";

const MainContainer = styled.div`
  display: flex;
  margin-top: 3rem;
  margin-bottom: 1rem;
  margin-left: 13rem;

  @media (max-width: 1200px) {
    margin-left: 20rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    margin-left: 0;
  }
`;

const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 30px 30px;
  grid-auto-flow: row;
  align-content: stretch;
  justify-items: stretch;
  width: 50%;
  height: 50%;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    width: 70%;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    width: 80%;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 10px;
    width: 90%;
  }
`;

export { MainContainer, ContainerCard };
