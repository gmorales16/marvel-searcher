import { styled } from "styled-components";
import Modal from "../Modal/Modal";
import { useCharactersData } from "../../hooks/useCharactersData";

const MainContainer = styled.div`
  display: flex;
  margin-top: 6rem;
  margin-bottom: 6rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
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

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    width: 80%;
  }
`;

export function MainComponent() {
  const {
    cardCharacter,
    isModalOpen,
    handleCloseModal,
    dataFilter,
    nameCharacterFilter,
  } = useCharactersData("https://gateway.marvel.com/v1/public/characters");

  return (
    <>
      <MainContainer>
        <ContainerCard>
          {cardCharacter && cardCharacter.length > 0 ? (
            cardCharacter
          ) : (
            <div></div>
          )}
        </ContainerCard>

        {isModalOpen && (
          <Modal
            comicsArray={dataFilter}
            title={nameCharacterFilter}
            onClose={handleCloseModal}
          />
        )}
      </MainContainer>
    </>
  );
}
