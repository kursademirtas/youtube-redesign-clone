import React from "react";
import { Search } from "@material-ui/icons/";
import styled from "styled-components";

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ebebeb;
  border-radius: 22px;
  margin-left:2rem;
  padding: 0 1rem;
  width: fit-content;

  input {
    width: 100%;
    height: 100%;
    background-color: inherit;
    border: none;
    opacity: 0.4;
    font-size: 18px;
    font-weight: normal;
  }

  @media only screen and (max-width: 600px) {
    position: absolute;
    right: 60px;

    input {
      display: none;
    }
  }
`;

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <input type="text" placeholder="Search" />
      <Search />
    </SearchBarContainer>
  );
};

export default SearchBar;
