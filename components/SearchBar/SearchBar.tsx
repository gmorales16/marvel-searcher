import { css, styled } from "styled-components";
import InputSearch from "../InputSearch/InputSearch";
import Logo from "../Logo/Logo";
export function SearchBar() {
  const SearchBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 10px;
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
  `;
  return (
    <div>
      <SearchBar>
        <Logo />
        <HrVertical />
        <InputSearch />
        <HrVertical $primary />
      </SearchBar>
    </div>
  );
}
