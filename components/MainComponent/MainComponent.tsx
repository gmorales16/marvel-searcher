import React, { useContext, useEffect } from "react";
import { styled } from "styled-components";
import { Card } from "../Card/Card";
import { useApiCall } from "../../hooks/useApiCall";
import { apiContext, nameCharacterContext } from "../../contexts/context";

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
export function MainComponent() {
  //Context for Api Call
  const { publicKey, timestamp, hash }: any = useContext(apiContext);
  const characterName = useContext(nameCharacterContext);

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

  const cardCharacter = charactersData?.map((character: any) => (
    <Card
      key={character.id}
      image={character.thumbnail.path + "." + character.thumbnail.extension}
      title={character.name}
    />
  ));
  return (
    <>
      <Main>
        <ContainerCard>{cardCharacter}</ContainerCard>
      </Main>
    </>
  );
}
