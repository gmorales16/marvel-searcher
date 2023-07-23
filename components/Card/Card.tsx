import { css, styled } from "styled-components";
import { CiStar } from "react-icons/ci";
import { useEffect, useState } from "react";
interface CardProps {
  image: string;
  title: string;
  click: any;
  id: string;
  isSelected: any;
}
const CardContainer = styled.div<{ $backgroundImage?: string }>`
  position: relative;
  right: 15rem;
  width: 356px;
  height: 480px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.$backgroundImage});
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 85%;
    height: 400px;
    left: 2rem;
  }
`;

const CardTitle = styled.h1`
  color: #ffffff;
  position: relative;
  top: 23rem;
  text-align: center;
  font-size: 19px;

  @media (max-width: 768px) {
    top: 20rem;
  }
`;

const StarIcon = styled.button<{ $clickIcon?: boolean }>`
  border: none;
  background-color: transparent;
  color: ${(props) => (props.$clickIcon ? "yellow" : "#ffffff")};
  position: relative;
  top: 1rem;
  left: 18rem;
  cursor: pointer;

  @media (max-width: 768px) {
    left: 13rem;
    position: absolute;
    top: 1rem;
  }
`;
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
      <CardContainer onClick={click} $backgroundImage={image}>
        <StarIcon onClick={handleClickStar} $clickIcon={clickIcon}>
          <CiStar size={40}></CiStar>
        </StarIcon>
        <CardTitle>{title}</CardTitle>
      </CardContainer>
    </>
  );
}
