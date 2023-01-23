import { useSetRecoilState } from "recoil";
import { isShowModalState, selectedMovieIdState } from "../store/recoil-state";

import PosterImage from "./PosterImage";

import styled from "styled-components";

const MovieItemStyle = styled.li`
  padding: 0 8px;
`;

const MovieCard = styled.div`
  width: 180px;
  height: 320px;
`;

const MoviePoster = styled.div`
  width: 100%;
  height: 240px;
  overflow: hidden;
  margin-bottom: 3px;
  border-radius: 5px;
  cursor: pointer;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 250ms ease-in-out;
  }
`;

const MovieContent = styled.div`
  width: 100%;
  color: #292a32;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Description = styled.div`
  font-size: 14px;
`;

const MovieItem = ({ data }) => {
  const setIsShowModal = useSetRecoilState(isShowModalState);
  const setSelectedMovieId = useSetRecoilState(selectedMovieIdState);

  const openModalHandler = () => {
    setSelectedMovieId(data.imdbID);
    setIsShowModal(true);
  };

  return (
    <MovieItemStyle onClick={openModalHandler}>
      <MovieCard>
        <MoviePoster>
          <PosterImage src={data.Poster} />
        </MoviePoster>
        <MovieContent>
          <Title>{data.Title}</Title>
          <Description>
            {data.Year} | {data.Type}
          </Description>
        </MovieContent>
      </MovieCard>
    </MovieItemStyle>
  );
};

export default MovieItem;
