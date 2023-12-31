import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  margin-top: 6rem;
  margin-bottom: 6rem;
  justify-content: center;
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
`;

export { Container, ContainerCard };
