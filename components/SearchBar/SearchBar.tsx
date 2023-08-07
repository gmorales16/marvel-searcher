import { CiSearch, CiStar } from "react-icons/ci";
import Logo from "../Logo/Logo";
import { useState, useEffect } from "react";
import {
  Search,
  HrVertical,
  Input,
  IconSearch,
  IconStar,
} from "./styledSearchBar";

const SearchBar = ({ setCharacterName }: any) => {
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
        <IconSearch data-testid="search-icon">
          <CiSearch opacity={0.5} size={30} />
        </IconSearch>
        <Input placeholder="Buscar" onChange={handleChange}></Input>
        <IconStar data-testid="star-icon" href="/favorite">
          <CiStar opacity={0.5} size={50}></CiStar>
        </IconStar>
        <HrVertical $primary />
      </Search>
    </div>
  );
};

export default SearchBar;
