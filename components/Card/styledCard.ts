import { styled } from "styled-components";

const CardContainer = styled.div<{ $backgroundImage?: string }>`
  position: relative;
  display: block;
  right: 15rem;
  width: 256px;
  height: 380px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.$backgroundImage});
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 85%;
    height: 400px;
    left: 2rem;
  }
`;

const CardTitle = styled.h1`
  color: #ffffff;
  position: relative;
  top: 19rem;
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
  position: absolute;
  top: 5%;
  right: 5%;
  cursor: pointer;

  @media (max-width: 768px) {
    top: 5%;
    right: 5%;
  }
`;

export { CardContainer, CardTitle, StarIcon };
