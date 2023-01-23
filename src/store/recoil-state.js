import { atom, selector, selectorFamily } from "recoil";
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

// atomFamily로 영화 상세 정보 가져오기
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

// 검색 결과 영화 리스트
export const movieListState = atom({
  key: "movieListState",
  default: [],
});

// 영화 리스트 가져오기
export const getMovieListState = selector({
  key: "getMovieListState",
  get: async ({ get }) => {
    const target = get(movieTitleState);
    const data = await request(`&s=${target}&page=1`);

    const { Search } = data;
    return Search;
  },
});

// selectorFamily로 클릭한 영화의 상세 정보 가져오기
export const getMovieItemInfoState = selectorFamily({
  key: "getMovieItemInfoState",
  get: (id) => async () => {
    const data = await request(`&i=${id}&plot=short`);

    return {
      id: data.imdbID,
      title: data.Title,
      country: data.Country,
      runtime: data.Runtime,
      type: data.Type,
      year: data.Year,
      actors: data.Actors,
      director: data.Director,
      genre: data.Genre.split(", "),
      plot: data.Plot,
      posterImg: data.Poster,
      rating: data.imdbRating,
    };
  },
});
