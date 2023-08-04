import { CardContainer, CardTitle, StarIcon } from "./styledCard";
import { CiStar } from "react-icons/ci";
import { useEffect, useState } from "react";
export interface CardProps {
  image: string;
  title: string;
  click: any;
  id: string;
  isSelected: boolean;
}

export function Card({ image, title, click, id }: CardProps) {
  interface FavoriteItem {
    id: string;
    image: string;
    title: string;
  }

  const isIdSaved = JSON.parse(localStorage.getItem("favorite") || "[]").some(
    (item: FavoriteItem) => item.id === id
  );
  const [clickIcon, setClickIcon] = useState(isIdSaved);

  const handleClickStar = () => {
    setClickIcon(!clickIcon);
    const favoriteItems: FavoriteItem[] = JSON.parse(
      localStorage.getItem("favorite") || "[]"
    );

    const index = favoriteItems.findIndex((item) => item.id === id);
    if (index !== -1) {
      favoriteItems.splice(index, 1);
    } else {
      favoriteItems.push({ id, image, title });
    }

    localStorage.setItem("favorite", JSON.stringify(favoriteItems));
  };

  useEffect(() => {
    setClickIcon(isIdSaved);
  }, [isIdSaved]);
  return (
    <>
      <CardContainer
        data-testid="card-click-image"
        onClick={click}
        $backgroundImage={image}
      >
        <StarIcon onClick={handleClickStar} $clickIcon={clickIcon}>
          <CiStar strokeWidth="1.5" size={40}></CiStar>
        </StarIcon>
        <CardTitle data-testid="card-title">{title}</CardTitle>
      </CardContainer>
    </>
  );
}
