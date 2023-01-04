import { atom, atomFamily, selector, selectorFamily } from "recoil";
import { request } from "../utils/api";

// 검색한 영화 제목
export const movieTitleState = atom({
  key: "movieTitleState",
  default: "",
});

// 모달
export const isShowModalState = atom({
  key: "isShowModalState",
  default: false,
});

// 클릭한 영화 아이디
export const selectedMovieIdState = atom({
  key: "selectedMovieIdState",
  default: null,
});

// export const movieItemState = atomFamily({
//   key: "movieItemState",
//   default: async (id) => {
//     const data = await request(`&i=${id}&plot=short`);
//     return {
//       id: data.imdbID,
//       title: data.Title,
//       type: data.Type,
//       year: data.Year,
//       actors: data.Actors,
//       genre: data.Genre,
//       plot: data.Plot,
//       posterImg: data.Poster,
//     };
//   },
// });

export const movieListState = atom({
  key: "movieListState",
  default: [],
});

// 영화 리스트
export const getMovieList = selector({
  key: "getMovieList",
  get: async ({ get }) => {
    const target = get(movieTitleState);
    const data = await request(`&s=${target}&page=1`);

    const { Search } = data;
    const movieList = Search;

    return movieList;
  },
});

// 클릭한 영화의 정보
export const getMovieItemInfo = selectorFamily({
  key: "getMovieItemInfo",
  get: (id) => async () => {
    const data = await request(`&i=${id}&plot=short`);
    return {
      id: data.imdbID,
      title: data.Title,
      type: data.Type,
      year: data.Year,
      actors: data.Actors,
      genre: data.Genre,
      plot: data.Plot,
      posterImg: data.Poster,
    };
  },
});
