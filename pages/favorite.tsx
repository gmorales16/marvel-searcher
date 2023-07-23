import React, { use, useContext, useEffect, useState } from "react";
import { SearchBar } from "../components/SearchBar/SearchBar";
import Modal from "../components/Modal/Modal";
import { styled } from "styled-components";
import "../app/globals.css";
import { useCharactersData } from "@/hooks/useCharactersData";
import { Card } from "@/components/Card/Card";

const MainContainer = styled.div`
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

export default function Favorite() {
  const [favoriteSearch, setFavoriteSearch] = useState("");
  const [favoriteObj, setFavoriteObj] = useState<string[]>([]);
  const [selectedCards, setSelectedCards] = useState<string[]>([]); // Nuevo estado para almacenar las tarjetas seleccionadas

  useEffect(() => {
    // Perform localStorage action
    const item = localStorage.getItem("favorite");
    setFavoriteObj(item ? JSON.parse(item) : []);
  }, []);
  const cardFavorite = favoriteObj.map(({ id, image, title }: any) => (
    <Card
      key={id}
      image={image}
      title={title}
      click={() => handleClickModal(id)}
      id={id}
      isSelected={selectedCards.includes(id)} // Pasamos un prop isSelected que indica si la tarjeta está seleccionada
    />
  ));

  const handleClickModal = (id: any) => {
    if (selectedCards.includes(id)) {
      // Si la tarjeta ya está seleccionada, la quitamos del estado de selectedCards
      setSelectedCards((prevSelected) =>
        prevSelected.filter((cardId) => cardId !== id)
      );
    } else {
      // Si la tarjeta no está seleccionada, la agregamos al estado de selectedCards
      setSelectedCards((prevSelected) => [...prevSelected, id]);
    }
  };

  return (
    <>
      <SearchBar setCharacterName={setFavoriteSearch} />
      <MainContainer>
        <ContainerCard>{cardFavorite}</ContainerCard>
      </MainContainer>
    </>
  );
}
