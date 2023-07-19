"use client";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { MainComponent } from "../components/MainComponent/MainComponent";
import apiContext from "../contexts/context";
import apiUtils from "../utils/apiUtils";

export default function Home() {
  const { publicKey, timestamp, hash } = apiUtils;
  return (
    <>
      <apiContext.Provider value={{ publicKey, timestamp, hash }}>
        <SearchBar />
        <MainComponent></MainComponent>
      </apiContext.Provider>
    </>
  );
}
