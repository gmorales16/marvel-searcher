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
