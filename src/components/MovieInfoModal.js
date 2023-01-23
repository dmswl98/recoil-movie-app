import React from "react";
import {
  useRecoilValue,
  useSetRecoilState,
  useRecoilValueLoadable,
} from "recoil";
import {
  isShowModalState,
  getMovieItemInfoState,
  selectedMovieIdState,
} from "../store/recoil-state";

import Modal from "./Modal";
import Star from "./Star";

import styled from "styled-components";

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 28px;
  border: 0;
  color: #22272e;
  background-color: transparent;
  cursor: pointer;
`;

const MoviePoster = styled.div`
  width: 340px;
  height: 500px;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MovieContent = styled.div`
  color: #22272e;
  width: 560px;
  padding: 65px 25px;
  font-weight: 400;
  font-size: 15px;

  header {
    display: flex;
    justify-content: space-between;
  }
`;

const Title = styled.div`
  max-width: 400px;
  font-weight: 700;
  font-size: 36px;
  margin-bottom: 2px;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  margin: 4px 0;

  svg {
    margin-right: 4px;
  }
`;

const RatingRatio = styled.span`
  font-size: 20px;
  font-weight: 700;
`;

const Description = styled.div`
  span::after {
    content: "・";
  }

  span:last-child::after {
    display: none;
  }
`;

const GenreList = styled.ul`
  display: flex;
  margin: 4px 0;
`;

const GenreItem = styled.li`
  background-color: #ccc;
  margin-right: 4px;
  padding: 2px 4px;
  border-radius: 3px;
  font-size: 13px;
  font-weight: 700;

  &:last-child {
    margin-right: 0;
  }
`;

const Credits = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
`;

const Label = styled.span`
  font-size: 16px;
  font-weight: 700;
  margin-right: 6px;
`;

const Plot = styled.div`
  overflow-y: auto;
  margin: 18px 0;
`;

const MovieDetail = () => {
  const selectedMovieId = useRecoilValue(selectedMovieIdState);
  const setIsShowModal = useSetRecoilState(isShowModalState);
  const { state, contents } = useRecoilValueLoadable(
    getMovieItemInfoState(selectedMovieId)
  );

  if (state === "hasError") {
    return <div>Error : {contents.message}</div>;
  }

  if (state === "loading") {
    return <div>Loading...</div>;
  }

  const closeModalHandler = () => {
    setIsShowModal(false);
  };

  return (
    <Modal onClose={closeModalHandler} width={900} height={500}>
      <CloseButton onClick={closeModalHandler}>×</CloseButton>
      <MoviePoster>
        <img src={contents.posterImg} alt="movie poster" />
      </MoviePoster>
      <MovieContent>
        <header>
          <Title>{contents.title}</Title>
          <Rating>
            <Star />
            <div>
              <RatingRatio>{contents.rating}</RatingRatio> / 10
            </div>
          </Rating>
        </header>
        <main>
          <Description>
            <span>{contents.country}</span>
            <span>{contents.year}</span>
            <span>{contents.type}</span>
            <span>{contents.runtime}</span>
          </Description>
          <GenreList>
            {contents.genre.map((genreItem, idx) => (
              <GenreItem key={idx}>{genreItem}</GenreItem>
            ))}
          </GenreList>
          <Credits>
            {contents.actors && (
              <div>
                <Label>Actors</Label>
                <span>{contents.actors}</span>
              </div>
            )}
            {contents.director && (
              <div>
                <Label>Director</Label>
                <span>{contents.director}</span>
              </div>
            )}
          </Credits>
          <Plot>{contents.plot}</Plot>
        </main>
      </MovieContent>
    </Modal>
  );
};

export default MovieDetail;
