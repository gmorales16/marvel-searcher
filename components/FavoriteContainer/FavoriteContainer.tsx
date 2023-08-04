import { Container, ContainerCard } from "./styledFavoriteContainer";

export default function FavoriteContainer() {
  return (
    <>
      <Container data-testid="favorite-container">
        <ContainerCard data-testid="favorite-card-container"></ContainerCard>
      </Container>
    </>
  );
}
