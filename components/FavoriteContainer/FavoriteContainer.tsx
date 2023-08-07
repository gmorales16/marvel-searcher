import { Container, ContainerCard } from "./styledFavoriteContainer";

const FavoriteContainer = () => {
  return (
    <>
      <Container data-testid="favorite-container">
        <ContainerCard data-testid="favorite-card-container"></ContainerCard>
      </Container>
    </>
  );
};

export default FavoriteContainer;
