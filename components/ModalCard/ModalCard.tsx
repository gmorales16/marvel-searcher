"use client";
import { useRouter } from "next/navigation";
import {
  Card,
  CardImage,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  StarIcon,
} from "./styledModalCard";

interface ModalCardProps {
  url: string;
  title: string;
  description: string;
  id: Number;
}

const ModalCard = ({ url, title, description, id }: ModalCardProps) => {
  // Set ID Comic in LocalStorage
  const router = useRouter();

  const handleClickCard = () => {
    localStorage.setItem("idComic", String(id));
    router.push("/comic");
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
};

export default ModalCard;
