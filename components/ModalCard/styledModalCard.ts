import styled from "styled-components";
import { CiStar } from "react-icons/ci";
const Card = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 10px;
  padding: 10px;
  cursor: pointer;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const CardImage = styled.img`
  flex: 0 0 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin-right: 10px;
    margin-bottom: 0;
  }
`;
const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
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

export {
  Card,
  CardImage,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  StarIcon,
};
