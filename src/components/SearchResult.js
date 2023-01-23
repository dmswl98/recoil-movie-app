import { useRecoilValueLoadable } from "recoil";
import { getMovieListState } from "../store/recoil-state";

import MovieItem from "./MovieItem";
import Spinner from "./Spinner";

import styled from "styled-components";

const MovieList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  margin: 50px 0;
`;

const SearchResult = () => {
  const { state, contents } = useRecoilValueLoadable(getMovieListState);

  if (state === "hasError") {
    return <div>Error : {contents.message}</div>;
  }

  if (state === "loading") {
    return <Spinner />;
  }

  return (
    <div>
      {contents && (
        <MovieList>
          {contents.map((movie) => (
            <MovieItem key={movie.imdbID} data={movie} />
          ))}
        </MovieList>
      )}
    </div>
  );
};

export default SearchResult;
