import { useRef } from "react";
import { useSetRecoilState } from "recoil";
import { movieTitleState } from "../store/recoil-state";

import classes from "./SearchForm.module.css";

const SearchForm = () => {
  const inputRef = useRef();
  const setMovieTitle = useSetRecoilState(movieTitleState);

  const handlerSubmit = (e) => {
    e.preventDefault();

    const value = inputRef.current.value;
    console.log(value);
    setMovieTitle(value);
  };

  return (
    <div className={classes["search-form"]}>
      <a className={classes.logo} href="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1920px-IMDB_Logo_2016.svg.png"
          alt="imdb-logo"
        />
      </a>
      <form onSubmit={handlerSubmit}>
        <input ref={inputRef} type="text" placeholder="Search movie" />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
