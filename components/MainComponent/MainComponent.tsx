import React, { useContext, useEffect, useMemo, useState } from "react";
import { styled } from "styled-components";
import { Card } from "../Card/Card";
import { useApiCall } from "../../hooks/useApiCall";
import { apiContext, nameCharacterContext } from "../../contexts/context";
import Modal from "../Modal/Modal";

const Main = styled.div`
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

interface IFilteredCharacters {
  comics: IFilteredCharactersComic;
  name: string;
}

interface IFilteredCharactersComic {
  items: [];
}

interface IFilteredCharactersItem {
  resourceURI: string;
  name: string;
}
export function MainComponent() {
  //Context for Api Call
  const { publicKey, timestamp, hash }: any = useContext(apiContext);
  const characterName = useContext(nameCharacterContext);
  const [dataFilter, setDataFilter] = useState<[]>([]);
  const [nameCharacterFilter, setNameCharacterFilter] = useState("");

  // Api calls

  const allCharactersData = useApiCall({
    condition: true,
    url: `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`,
  });

  const filteredCharactersData = useApiCall({
    condition: characterName !== "",
    url: `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${characterName}&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`,
  });

  // Combine results based on characterName
  const charactersData =
    characterName === "" ? allCharactersData : filteredCharactersData;

  const cardCharacter = charactersData?.map(({ id, thumbnail, name }: any) => (
    <Card
      key={id}
      image={thumbnail.path + "." + thumbnail.extension}
      title={name}
      click={() => handleClickModal(id)}
    />
  ));

  // Open Modal
  const [isModalOpen, setModalOpen] = useState(false);
  const handleClickModal = (id: any) => {
    setModalOpen(true);
    const filteredCharacters: IFilteredCharacters[] = charactersData.filter(
      (character: any) => {
        return character.id == id;
      }
    );
    setDataFilter(filteredCharacters[0].comics.items);
    setNameCharacterFilter(filteredCharacters[0].name);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Main>
        <ContainerCard>
          {/* Add a check for cardCharacter */}
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
      </Main>
    </>
  );
}
