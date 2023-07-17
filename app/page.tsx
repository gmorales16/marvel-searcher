"use client";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { Card } from "../components/Card/Card";

export default function Home() {
  return (
    <>
      <header>
        <SearchBar />
      </header>
      <body>
        <Card
          image={
            "https://images.everyeye.it/img-notizie/spider-man-across-the-spider-verse-amore-gwen-miles-ci-tensione-v3-621097-1200x1200.webp"
          }
          title={"Spider-Woman (stacy)"}
        ></Card>
      </body>
    </>
  );
}
