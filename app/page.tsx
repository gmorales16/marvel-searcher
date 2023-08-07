"use client";
import SearchBar from "../components/SearchBar/SearchBar";
import MainComponent from "../components/MainComponent/MainComponent";
import { ApiContext, NameCharacterContext } from "../contexts/context";
import apiUtils from "../utils/apiUtils";
import { useState } from "react";

export default function Home() {
  const { publicKey, timestamp, hash } = apiUtils;
  const [characterName, setCharacterName] = useState("");
  return (
    <>
      <NameCharacterContext.Provider value={characterName}>
        <ApiContext.Provider value={{ publicKey, timestamp, hash }}>
          <SearchBar setCharacterName={setCharacterName}></SearchBar>
          <MainComponent />
        </ApiContext.Provider>
      </NameCharacterContext.Provider>
    </>
  );
}
