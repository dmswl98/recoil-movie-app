import React from "react";
import {
  useRecoilValue,
  useSetRecoilState,
  useRecoilValueLoadable,
} from "recoil";
import {
  isShowModalState,
  getMovieItemInfo,
  selectedMovieIdState,
} from "../store/recoil-state";

import Modal from "./Modal";
import classes from "./MovieInfoModal.module.css";

const MovieDetail = () => {
  const selectedMovieId = useRecoilValue(selectedMovieIdState);
  const setIsShowModal = useSetRecoilState(isShowModalState);
  const { state, contents } = useRecoilValueLoadable(
    getMovieItemInfo(selectedMovieId)
  );

  if (state === "hasError") {
    return <div>Error : {contents.message}</div>;
  }

  if (state === "loading") {
    return <div>Loading...</div>;
  }

  console.log(contents);

  const closeModalHandler = () => {
    setIsShowModal(false);
  };

  return (
    <Modal>
      <div className={classes["modal__inner"]}>
        <button className={classes["btn-close"]} onClick={closeModalHandler}>
          ×
        </button>
        <div className={classes["movie-image"]}>
          <img src={contents.posterImg} alt="movie poster" />
        </div>
        <div className={classes["movie-content"]}>
          <div>{contents.title}</div>
          <div>{contents.type}</div>
          <div>{contents.actors}</div>
          <div>{contents.genre}</div>
          <div>{contents.plot}</div>
          {/* <header>
        <div class="title">
          {{ selectedMovieInfo.title }} 
        </div>
        <div
          v-if="selectedMovieInfo.rating"
          class="rating">
          <Star />
          <div><span class="rating-ratio">{{ selectedMovieInfo.rating }}</span> / 10</div>
        </div>
      </header>
      <main>
        <div class="description">
          <span v-if="selectedMovieInfo.country">{{ selectedMovieInfo.country }}</span>
          <span v-if="selectedMovieInfo.year">{{ selectedMovieInfo.year }}</span>
          <span v-if="selectedMovieInfo.type">{{ selectedMovieInfo.type }}</span>
          <span v-if="selectedMovieInfo.runtime">{{ selectedMovieInfo.runtime }}</span>
        </div>
        <div class="genre">
          <ul class="genre-list">
            <li
              v-for="(genre, idx) in selectedMovieInfo.genre"
              :key="idx"
              class="genre-item badge">
              {{ genre }}
            </li>
          </ul>
        </div>
        <div
          v-if="selectedMovieInfo.rated"
          class="rated badge">
          {{ selectedMovieInfo.rated }}
        </div>
        <div class="credits">
          <div v-if="selectedMovieInfo.actors">
            <span class="label">Actors</span>
            <span>
              {{ selectedMovieInfo.actors }} 
            </span>
          </div>
          <div v-if="selectedMovieInfo.director">
            <span class="label">Director</span>
            <span>
              {{ selectedMovieInfo.director }}
            </span>
          </div>
        </div>
        <div
          v-if="selectedMovieInfo.plot"
          class="plot">
          {{ selectedMovieInfo.plot }}
        </div>
      </main> */}
        </div>
      </div>
    </Modal>
  );
};

export default MovieDetail;
