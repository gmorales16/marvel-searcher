import { useApiCall } from "./useApiCall";
import { apiContext, nameCharacterContext } from "../contexts/context";
import { Card } from "../components/Card/Card";

import { useContext, useState } from "react";

interface IFilteredCharacters {
  comics: IFilteredCharactersComic;
  name: string;
}

interface IFilteredCharactersComic {
  items: [];
}

export function useCharactersData(url: string) {
  const { publicKey, timestamp, hash }: any = useContext(apiContext);
  const characterName = useContext(nameCharacterContext);
  const [dataFilter, setDataFilter] = useState<[]>([]);
  const [nameCharacterFilter, setNameCharacterFilter] = useState("");

  const allCharactersData = useApiCall({
    condition: true,
    url: `${url}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`,
  });

  const filteredCharactersData = useApiCall({
    condition: characterName !== "",
    url: `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${characterName}&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`,
  });

  const charactersData =
    characterName === "" ? allCharactersData : filteredCharactersData;

  const cardCharacter = charactersData?.map(({ id, thumbnail, name }: any) => (
    <Card
      key={id}
      image={thumbnail.path + "." + thumbnail.extension}
      title={name}
      click={() => handleClickModal(id)}
      id={id}
      isSelected={""}
    />
  ));

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

  return {
    charactersData,
    cardCharacter,
    isModalOpen,
    handleClickModal,
    handleCloseModal,
    dataFilter,
    nameCharacterFilter,
  };
}
