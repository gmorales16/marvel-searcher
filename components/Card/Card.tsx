"use client";
import { styled } from "styled-components";

interface CardProps {
  image: string;
  title: string;
}

export default function Card({ image, title }: CardProps) {
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
    padding-top: 20rem;
    padding-left: 1.5rem;
    display: flex;
    font-size: 19px;
  `;
  return (
    <>
      <CardContainer>
        <CardTitle>{title}</CardTitle>
      </CardContainer>
    </>
  );
}
