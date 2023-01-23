import { useRef } from "react";
import { useSetRecoilState } from "recoil";
import { movieTitleState } from "../store/recoil-state";

import styled from "styled-components";

const SearchFormStyle = styled.div`
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.a`
  display: block;
  width: auto;
  height: 40px;
  margin-right: 16px;

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const SearchInput = styled.input`
  min-width: 340px;
  height: 40px;
  border: 2px solid rgb(245, 197, 24);
  border-radius: 5px;
  background-color: #fff;
  margin-right: 10px;
  padding: 10px;
  font-size: 16px;
  outline: none;
`;

const SubmitButton = styled.button`
  height: 40px;
  background-color: rgb(245, 197, 24);
  border: 2px solid rgb(245, 197, 24);
  border-radius: 5px;
  padding: 0 10px;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background-color: rgb(230, 177, 1);
    border-color: rgb(230, 177, 1);
  }
`;

const SearchForm = () => {
  const inputRef = useRef();
  const setMovieTitle = useSetRecoilState(movieTitleState);

  const submitHandler = (e) => {
    e.preventDefault();

    const movieTitle = inputRef.current.value;
    setMovieTitle(movieTitle);

    inputRef.current.value = "";
  };

  return (
    <SearchFormStyle>
      <Logo href="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1920px-IMDB_Logo_2016.svg.png"
          alt="imdb-logo"
        />
      </Logo>
      <form onSubmit={submitHandler}>
        <SearchInput ref={inputRef} type="text" placeholder="Search movie" />
        <SubmitButton>Search</SubmitButton>
      </form>
    </SearchFormStyle>
  );
};

export default SearchForm;
