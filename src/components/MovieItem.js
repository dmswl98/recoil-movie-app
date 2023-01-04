import { useSetRecoilState } from "recoil";
import { isShowModalState, selectedMovieIdState } from "../store/recoil-state";

import classes from "./MovieItem.module.css";

const MovieItem = ({ data }) => {
  const setIsShowModal = useSetRecoilState(isShowModalState);
  const setSelectedMovieId = useSetRecoilState(selectedMovieIdState);

  const openModalHandler = () => {
    setSelectedMovieId(data.imdbID);
    setIsShowModal(true);
  };

  return (
    <li className={classes["movie-item"]} onClick={openModalHandler}>
      <div className={classes["movie-card"]}>
        <div className={classes["movie-image"]}>
          <img src={data.Poster} alt="poster" />
        </div>
        <div className={classes["movie-content"]}>
          <div className={classes["title"]}>
            <strong>{data.Title}</strong>
          </div>
          <div className={classes["description"]}>
            {data.Year} | {data.Type}
          </div>
        </div>
      </div>
    </li>
  );
};

export default MovieItem;
