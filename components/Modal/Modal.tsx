import React, { useContext, useEffect, useState } from "react";
import ModalCard from "../ModalCard/ModalCard";
import { apiContext } from "@/contexts/context";
import {
  ModalWrapper,
  ModalContent,
  ModalTitle,
  CloseButton,
  ModalCardContainer,
} from "./styledModal";

interface ModalProps {
  onClose: any;
  comicsArray: [];
  title: string;
}

const Modal = ({ onClose, comicsArray, title }: ModalProps) => {
  const [comicUrls, setComicUrls] = useState<string[]>([]);
  const { publicKey, timestamp, hash }: any = useContext(apiContext);
  const [comicsData, setComicsData] = useState<any[]>([]); // State to store comics data

  // Generate URLs for comics
  useEffect(() => {
    const uniqueUrls = Array.from(
      new Set(
        comicsArray.map(
          ({ resourceURI }: { resourceURI: string }) => resourceURI
        )
      )
    );

    const httpsUniqueUrls: string[] = uniqueUrls.map((url: string) =>
      url.replace("http:", "https:")
    );
    setComicUrls(httpsUniqueUrls);
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
