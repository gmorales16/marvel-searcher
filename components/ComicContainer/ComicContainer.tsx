import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  column-count: 2;
  margin: 5rem;
`;

const Image = styled.img`
  width: 25%;
`;

const InfoContainer = styled.div`
  color: #3e3e3e;
  letter-spacing: 0px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
`;

const GeneralData = styled.h3`
  margin-top: 5rem;
  white-space: pre-wrap;
  font-size: 21px;
`;

const Description = styled.p`
  margin-top: 5rem;
  width: 437px;
  font-size: 18px;
`;

interface IComicContainer {
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
        <Title>{title}</Title>
        <GeneralData>
          Published: {published} <br />
          Writer: {writer} <br />
          Penciler: {penciler} <br />
          Cover Artist: {artist} <br />
        </GeneralData>
        <Description>{description}</Description>
      </InfoContainer>
    </Container>
  );
}
