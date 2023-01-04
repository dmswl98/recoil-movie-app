import classes from "./SearchResult.module.css";

import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { getMovieList } from "../store/recoil-state";
import MovieItem from "./MovieItem";

const SearchResult = () => {
  const { state, contents } = useRecoilValueLoadable(getMovieList);
  console.log(contents);

  if (state === "hasError") {
    return <div>Error : {contents.message}</div>;
  }

  if (state === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {contents && (
        <ul className={classes["movie-list"]}>
          {contents.map((movie) => (
            <MovieItem key={movie.imdbID} data={movie} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchResult;
// https://codesandbox.io/s/unruffled-kare-jdhjf?from-embed=&file=/src/App.js
