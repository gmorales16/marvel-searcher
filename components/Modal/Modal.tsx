import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import ModalCard from "../ModalCard/ModalCard";
import { apiContext } from "@/contexts/context";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

const ModalContent = styled.div`
  width: 500px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
`;

const ModalTitle = styled.h2`
  position: relative;
  bottom: 20px;
  font-size: 35px;
  color: #505050;
`;

const CloseButton = styled.button`
  position: relative;
  left: 95%;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const ModalCardContainer = styled.div`
  max-height: 400px; /* Ajusta la altura máxima según tus necesidades */
  overflow-y: auto;
`;

interface ModalProps {
  onClose: any;
  comicsArray: [];
  title: string;
}

const Modal = ({ onClose, comicsArray, title }: ModalProps) => {
  const [comicUrls, setComicUrls] = useState<string[]>([]);
  const { publicKey, timestamp, hash }: any = useContext(apiContext);
  const [comicsData, setComicsData] = useState<any[]>([]); // Estado para almacenar los datos de los cómics

  // Generate URLs for comics
  useEffect(() => {
    const uniqueUrls = Array.from(
      new Set(comicsArray.map(({ resourceURI }) => resourceURI))
    );
    setComicUrls(uniqueUrls);
  }, [comicsArray]);

  useEffect(() => {
    // Function to fetch comic data for a given URL
    const fetchComicData = async (url: string) => {
      try {
        const response = await fetch(
          `${url}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        return jsonData.data.results[0];
      } catch (error) {
        console.error("Error fetching comic data:", error);
        return null;
      }
    };

    // Fetch comic data for all URLs in comicUrls
    Promise.all(comicUrls.map(fetchComicData))
      .then((data) => {
        // Filter out any null values (in case of error) and set the comicsData state
        setComicsData(data.filter((item) => item !== null));
      })
      .catch((error) => {
        console.error("Error fetching comic data:", error);
      });
  }, [comicUrls, publicKey, timestamp, hash]);

  return (
    <ModalWrapper>
      <ModalContent>
        <CloseButton onClick={onClose}>X</CloseButton>
        <ModalTitle>{title}</ModalTitle>
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
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
