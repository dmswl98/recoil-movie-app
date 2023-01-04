export const STORE = {
  MUTATIONS: {
    GET_MOVIELIST: "getMovieList",
    CHANGE_PAGE: "changePage",
    UPDATE_MOVIETITLE: "updateMovieTitle",
    SET_SELECTEDMOVIEINFO: "setSelectedMovieInfo",
    RESET_SELECTEDMOVIEINFO: "resetSelectedMovieInfo",
  },
  ACTIONS: {
    FETCH_MOVIELIST: "fetchMovieList",
    FETCH_SELECTEDMOVIEINFO: "fetchSelectedMovieInfo",
  },
};

export const ERROR_MESSAGE = {
  BAD_REQUEST: "요청 에러가 발생했습니다.",
};

export const DEFAULT_MOVIE_POSTER_SRC = {
  SMALL: "https://via.placeholder.com/210x300.png?text=Poster+Not+Found",
  BIGGER: "https://via.placeholder.com/340x480.png?text=Poster+Not+Found",
};
