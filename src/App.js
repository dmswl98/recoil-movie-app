import React from "react";
import { useRecoilValue } from "recoil";
import MovieInfoModal from "./components/MovieInfoModal";
import SearchForm from "./components/SearchForm";
import SearchResult from "./components/SearchResult";
import { isShowModalState } from "./store/recoil-state";
import "./App.css";

function App() {
  const isShowModal = useRecoilValue(isShowModalState);

  return (
    <>
      <SearchForm />
      <SearchResult />
      {isShowModal && <MovieInfoModal />}
      {/* <React.Suspense fallback={<div>Loading...</div>}>
      </React.Suspense> */}
    </>
  );
}

export default App;
