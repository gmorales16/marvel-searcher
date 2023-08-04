import {
  Container,
  Image,
  InfoContainer,
  Title,
  GeneralData,
  Description,
} from "./styledComicContainer";

export interface IComicContainer {
  image: string;
  title: string;
  published: string;
  writer: any;
  penciler: string;
  artist: string;
  description: string;
}

export default function ComicContainer({
  image,
  title,
  published,
  writer,
  penciler,
  artist,
  description,
}: IComicContainer) {
  return (
    <Container>
      <Image src={image} alt="Comic Image"></Image>
      <InfoContainer>
        <Title data-testid="comic-title">{title}</Title>
        <GeneralData>
          Published: {published} <br />
          Writer: {writer} <br />
          Penciler: {penciler} <br />
          Cover Artist: {artist} <br />
        </GeneralData>
        <Description data-testid="comic-description">{description}</Description>
      </InfoContainer>
    </Container>
  );
}
