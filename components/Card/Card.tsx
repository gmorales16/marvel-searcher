import { css, styled } from "styled-components";
import { CiStar } from "react-icons/ci";

interface CardProps {
  image: string;
  title: string;
}

export function Card({ image, title }: CardProps) {
  const CardContainer = styled.div`
    width: 256px;
    height: 380px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url(${image});
    border-radius: 5px;
  `;

  const CardTitle = styled.h1`
    color: #ffffff;
    position: relative;
    top: 17rem;
    text-align: center;
    font-size: 19px;
  `;

  const StarIcon = styled.button<{ $clickIcon?: boolean }>`
    border: none;
    background-color: transparent;
    color: ${(props) => (props.$clickIcon ? "yellow" : "#ffffff")};
    position: relative;
    top: 1rem;
    left: 12.5rem;
  `;

  return (
    <>
      <CardContainer>
        <StarIcon>
          <CiStar size={30}></CiStar>
        </StarIcon>
        <CardTitle>{title}</CardTitle>
      </CardContainer>
    </>
  );
}
