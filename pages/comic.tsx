import React, { useEffect, useState } from "react";
import { SearchBar } from "../components/SearchBar/SearchBar";
import ComicContainer from "../components/ComicContainer/ComicContainer";
import "../app/globals.css";
import { useApiCall } from "@/hooks/useApiCall";

import formatDateToCustomFormat from "../utils/formatDateutils";

export default function Comic() {
  const [searchComic, setSearchComic] = useState("");
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    // Perform localStorage action
    const item = localStorage.getItem("idComic");
    setId(item);
  }, []);

  const [comicData] = useApiCall({
    condition: id !== null,
    url: `https://gateway.marvel.com/v1/public/comics/${id}?ts=1000&apikey=2b13a686a43c563e99006fd2a8af1363&hash=8daa848a6beef96a71f7b1964a6f2a52`,
  });

  // Filter creators based on their roles
  let writer = "";
  let penciler = "";
  let coverArtist = "";

  if (comicData && comicData.creators && comicData.creators.items) {
    comicData.creators.items.forEach((creator: any) => {
      writer = creator.role === "writer" ? creator.name : writer;
      coverArtist =
        creator.role === "penciller (cover)"
          ? (penciler = creator.name)
          : coverArtist;
      penciler = creator.role === "penciller" ? creator.name : penciler;
    });
  }

  //Date Formatter Custom
  let dateWithTimezone = null;

  if (comicData && comicData.modified) {
    dateWithTimezone = new Date(comicData.modified);
  }

  return (
    <>
      <SearchBar setCharacterName={setSearchComic}></SearchBar>
      {comicData ? (
        <ComicContainer
          key={comicData.resourceURI} // Use a unique key for each ComicContainer
          image={comicData.thumbnail.path + "." + comicData.thumbnail.extension}
          title={comicData.title}
          published={
            dateWithTimezone ? formatDateToCustomFormat(dateWithTimezone) : ""
          }
          writer={writer}
          penciler={penciler}
          artist={coverArtist}
          description={comicData.description}
        />
      ) : (
        <div></div>
      )}
    </>
  );
}
