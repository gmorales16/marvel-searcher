import React, { useContext, useEffect, useState } from "react";
import ModalCard from "../ModalCard/ModalCard";
import { ApiContext } from "@/contexts/context";
import {
  ModalWrapper,
  ModalContent,
  ModalTitle,
  CloseButton,
  ModalCardContainer,
} from "./styledModal";
import { SpinnerContainerModal } from "../SpinnerContainer/styledSpinnerContainer";
import ClipLoader from "react-spinners/ClipLoader";

interface ModalProps {
  onClose: any;
  comicsArray: [];
  title: string;
}

const Modal = ({ onClose, comicsArray, title }: ModalProps) => {
  const { publicKey, timestamp, hash }: any = useContext(ApiContext);
  const [comicsData, setComicsData] = useState<any[]>([]); // State to store comics data
  const [loading, setLoading] = useState(true); // Loading state to track data fetching
  const [idCharacter, setIdCharacter] = useState<number | null>(null);
  const cachedData = useState<{ [key: string]: any[] }>({})[0];

  useEffect(() => {
    const item = localStorage.getItem("idCharacter");
    if (item !== null) {
      const numValue = +item; // Convert the value to a number
      if (!isNaN(numValue)) {
        setIdCharacter(numValue);
      }
    }
  }, []);

  useEffect(() => {
    const baseURL = "https://gateway.marvel.com:443/v1/public/characters";
    const fullURL = `${baseURL}/${idCharacter}/comics?&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

    const fetchData = async () => {
      if (idCharacter) {
        if (cachedData[fullURL]) {
          setComicsData(cachedData[fullURL]);
        } else {
          const response = await fetch(fullURL);
          const jsonData = await response.json();
          setComicsData(jsonData.data.results);
          cachedData[fullURL] = jsonData.data.results;
        }
      } else {
        setComicsData([]);
      }
    };

    fetchData();
  }, [idCharacter]);

  useEffect(() => {
    if (comicsData.length > 0) {
      setLoading(false);
    }
  }, [comicsData]);

  return (
    <ModalWrapper>
      <ModalContent>
        <CloseButton onClick={onClose}>X</CloseButton>
        <ModalTitle>{title}</ModalTitle>
        {loading ? (
          <SpinnerContainerModal>
            <ClipLoader
              color="#ff0000"
              size={100}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </SpinnerContainerModal>
        ) : (
          <ModalCardContainer>
            {comicsData.map((comic) => (
              <ModalCard
                key={comic.id}
                url={comic.thumbnail.path + "." + comic.thumbnail.extension}
                title={comic.title}
                description={comic.description}
                id={comic.id}
              />
            ))}
          </ModalCardContainer>
        )}
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
