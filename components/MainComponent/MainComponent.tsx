import Modal from "../Modal/Modal";
import { useCharactersData } from "../../hooks/useCharactersData";
import { MainContainer, ContainerCard } from "./styledMainComponent";

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
