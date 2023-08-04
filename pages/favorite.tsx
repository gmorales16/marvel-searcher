import React, { useEffect, useState } from "react";
import { SearchBar } from "../components/SearchBar/SearchBar";
import {
  MainContainer,
  ContainerCard,
} from "../components/Favorite/styledFavorite";
import { Card } from "@/components/Card/Card";
import "../app/globals.css";

export default function Favorite() {
  const [favoriteSearch, setFavoriteSearch] = useState("");
  const [favoriteObj, setFavoriteObj] = useState<string[]>([]);
  const [selectedCards, setSelectedCards] = useState<string[]>([]); // New state to store the selected cards

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
      isSelected={selectedCards.includes(id)} // We pass an isSelected prop that indicates whether the card is selected
    />
  ));

  const handleClickModal = (id: any) => {
    if (selectedCards.includes(id)) {
      //If the card is already selected, we remove it from the selectedCards state if we don't add it
      setSelectedCards((prevSelected) =>
        prevSelected.filter((cardId) => cardId !== id)
      );
    } else {
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
