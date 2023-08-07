import Modal from "../Modal/Modal";
import useCharactersData from "../../hooks/useCharactersData";
import { MainContainer, ContainerCard } from "./styledMainComponent";
import { SpinnerContainer } from "../SpinnerContainer/styledSpinnerContainer";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const MainComponent = () => {
  const {
    cardCharacter,
    isModalOpen,
    handleCloseModal,
    dataFilter,
    nameCharacterFilter,
  } = useCharactersData("https://gateway.marvel.com/v1/public/characters");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, [cardCharacter]);

  return (
    <>
      {isLoading ? (
        <SpinnerContainer>
          <ClipLoader
            color="#ff0000"
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </SpinnerContainer>
      ) : (
        <MainContainer>
          <ContainerCard>
            {cardCharacter && cardCharacter.length > 0 ? cardCharacter : null}
          </ContainerCard>

          {isModalOpen && (
            <Modal
              comicsArray={dataFilter}
              title={nameCharacterFilter}
              onClose={handleCloseModal}
            />
          )}
        </MainContainer>
      )}
    </>
  );
};

export default MainComponent;
