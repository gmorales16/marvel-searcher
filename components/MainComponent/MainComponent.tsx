import React, { useContext, useEffect } from "react";
import { styled } from "styled-components";
import { Card } from "../Card/Card";
import { useApiCall } from "../../hooks/useApiCall";
import apiContext from "../../contexts/context";

export function MainComponent() {
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

  //Api Call
  const { publicKey, timestamp, hash }: any = useContext(apiContext);
  const charactersData = useApiCall(
    `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
  );

  const cardCharacter = charactersData?.map((character: any) => (
    <Card
      key={character.id}
      image={character.thumbnail.path + "." + character.thumbnail.extension}
      title={character.name}
    />
  ));

  console.log(charactersData);

  return (
    <>
      <Main>
        <ContainerCard>{cardCharacter}</ContainerCard>
      </Main>
    </>
  );
}
