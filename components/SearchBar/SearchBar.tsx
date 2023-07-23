import { css, styled } from "styled-components";
import { CiSearch, CiStar } from "react-icons/ci";
import Logo from "../Logo/Logo";
import { useState, useEffect } from "react";

const Search = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 10px;

  @media (max-width: 1200px) {
    flex-direction: row;
    align-items: center;
  }
`;

const HrVertical = styled.hr<{ $primary?: boolean }>`
  height: 50px;
  width: 3px;
  border-width: 0;
  margin-left: 20px;
  background-color: #f0f0f0;
  color: #f0f0f0;
  ${(props) =>
    props.$primary &&
    css`
      margin-right: 100px;
    `};

  @media (max-width: 1200px) {
    display: none;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
  border: 0px;
  margin-left: 20px;
  margin-right: 20px;
  outline: none;
  opacity: 0.5;

  @media (max-width: 1200px) {
    margin: 10px 0;
  }
`;

const IconSearch = styled.div`
  margin-left: 30px;

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const IconStar = styled.a`
  color: black;
  :hover {
    color: yellow;
    cursor: pointer;
  }

  @media (max-width: 1200px) {
    margin: 10px 0;
  }
`;

export function SearchBar({ setCharacterName }: any) {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Define a delay time (in milliseconds) for the debounce
    const delay = 600;

    // Set up a timer to execute the handleChange function after the delay
    const timer = setTimeout(() => {
      setCharacterName(searchQuery);
    }, delay);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <Search>
        <Logo />
        <HrVertical />
        <IconSearch>
          <CiSearch opacity={0.5} size={30} />
        </IconSearch>
        <Input placeholder="Buscar" onChange={handleChange}></Input>
        <IconStar href="/favorite">
          <CiStar opacity={0.5} size={50}></CiStar>
        </IconStar>
        <HrVertical $primary />
      </Search>
    </div>
  );
}
