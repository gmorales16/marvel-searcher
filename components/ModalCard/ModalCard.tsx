import React from "react";
import styled from "styled-components";
import { CiStar } from "react-icons/ci";

const Card = styled.div`
  display: flex;
  max-width: 600px;
  margin: 10px;
  padding: 10px;
`;

const CardImage = styled.img`
  flex: 0 0 200px; /* Establecemos un ancho fijo para la imagen */
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 10px; /* Agregamos un margen a la derecha para separar la imagen */
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1; /* El contenido ocupará el espacio disponible restante */
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardTitle = styled.h3`
  margin: 0;
  color: #505050;
`;

const CardDescription = styled.p`
  margin-top: 10px;
  color: #505050;
  white-space: pre-wrap;
`;

const StarIcon = styled(CiStar)`
  color: #505050;
  font-size: 24px;
`;

interface ModalCardProps {
  url: string;
  title: string;
  description: string;
  id: Number;
}

export default function ModalCard({
  url,
  title,
  description,
  id,
}: ModalCardProps) {
  // Set ID Comic in LocalStorage

  const handleClickCard = () => {
    localStorage.setItem("idComic", String(id));
    window.location.href = `/comic`;
  };
  return (
    <Card onClick={handleClickCard}>
      <CardImage src={url} alt="Card Image" />
      <CardContent>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <StarIcon />
        </CardHeader>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
