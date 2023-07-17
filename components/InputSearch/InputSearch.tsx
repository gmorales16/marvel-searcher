import { styled } from "styled-components";
import { CiSearch, CiStar } from "react-icons/ci";
export default function InputSearch() {
  const Input = styled.input`
    width: 100%;
    height: 30px;
    border: 0px;
    margin-left: 20px;
    margin-right: 20px;
    outline: none;
    opacity: 0.5;
  `;

  const IconSearch = styled.div`
    margin-left: 30px;
  `;
  const IconStar = styled.a`
    color: black;
    :hover {
      color: yellow;
      cursor: pointer;
    }
  `;
  return (
    <>
      <IconSearch>
        <CiSearch opacity={0.5} size={30} />
      </IconSearch>
      <Input placeholder="Buscar"></Input>
      <IconStar href="/">
        <CiStar opacity={0.5} size={50}></CiStar>
      </IconStar>
    </>
  );
}
