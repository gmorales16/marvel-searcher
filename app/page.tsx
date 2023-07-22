"use client";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { MainComponent } from "../components/MainComponent/MainComponent";
import { apiContext, nameCharacterContext } from "../contexts/context";
import apiUtils from "../utils/apiUtils";
import { useState } from "react";
import Modal from "../components/Modal/Modal";

export default function Home() {
  const { publicKey, timestamp, hash } = apiUtils;
  const [characterName, setCharacterName] = useState("");
  return (
    <>
      <nameCharacterContext.Provider value={characterName}>
        <apiContext.Provider value={{ publicKey, timestamp, hash }}>
          <SearchBar setCharacterName={setCharacterName}></SearchBar>
          <MainComponent />
        </apiContext.Provider>
      </nameCharacterContext.Provider>
    </>
  );
}
