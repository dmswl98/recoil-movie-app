# ๐ฌ recoil-movie-app

## ๐ฎ recoil ์ฌ์ฉ๊ธฐ

### 1๏ธโฃ ์ฌ์ฉ ์ด์ 

- ์ ๋ง ๊ฐ๋จํ ์ฌ์ฉ ๋ฐฉ๋ฒ
- ๋น๋๊ธฐ ์ฒ๋ฆฌ์ ๊ฒฝ์ฐ ๋ณ๋์ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๊ฐ ํ์ ์์
- Recoil์ ๋ณด์ผ๋ฌํ๋ ์ดํธ๊ฐ ์๋ API
- selector๋ฅผ ์ด์ฉํ API ์บ์ฑ ๊ฐ๋ฅ

์ 4๊ฐ์ง์ ์ด์ ์ ๊ฒฝํํด๋ณด๊ณ  ์ถ์ด ์ฌ์ฉํ๊ฒ ๋์๋ค.

<br />

### 2๏ธโฃ Recoil์ ๋ณด์ผ๋ฌํ๋ ์ดํธ๊ฐ ์๋ API

์ต์๋จ ์ปดํฌ๋ํธ๋ฅผ RecoilRoot๋ก ๊ฐ์ธ๊ธฐ๋ง ํ๋ฉด ๋ฐ๋ก ์ฌ์ฉํ  ์ ์๋ค.

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
```

<br />

### 3๏ธโฃ selector๋ฅผ ์ด์ฉํ API ์บ์ฑ ๊ฐ๋ฅ

selector๋ ๊ตฌ๋ํ๊ณ  ์๋ atom ๊ฐ์ ๋ฐ๋ผ ์๋ก์ด ๊ฐ์ ๋ฆฌํดํด์ฃผ๋ ์์ ํจ์์ด๋ค. ์ฆ, get์ ์์ฑํ atom ๊ฐ์ ์์กด์ฑ์ผ๋ก ๊ฐ๊ณ  ์์ผ๋ฉฐ, ๊ตฌ๋ํ๋ atom ๊ฐ์ด ๋ณํ  ๋๋ง๋ค ์๋ก์ด ๊ฐ์ ๊ฐฑ์ ํ๋ค.

```javascript
// ๊ฒ์ํ ์ํ ์ ๋ชฉ
export const movieTitleState = atom({
  key: "movieTitleState",
  default: "",
});

// ์ํ ๋ฆฌ์คํธ ๊ฐ์ ธ์ค๊ธฐ
export const getMovieListState = selector({
  key: "getMovieListState",
  get: async ({ get }) => {
    const target = get(movieTitleState);
    const data = await request(`&s=${target}&page=1`);

    const { Search } = data;
    return Search;
  },
});
```

๋ํ, recoil์ ๋ณ๋์ ๋น๋๊ธฐ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๊ฐ ํ์ํ์ง ์๊ณ , selector๋ก ๋น๋๊ธฐ๋ฅผ ๊ฐํธํ๊ฒ ์ฒ๋ฆฌํ  ์ ์๋ค.
์ด ๋, atom ๊ฐ์ด ๋ณํ์ง ์๋ ๊ฒฝ์ฐ ์บ์ฑ๋ ๊ฐ์ ๋ฆฌํดํ๋ค.

![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/76807107/214076513-fc0dd594-31bd-468e-9e61-6e5f331d24dd.gif)

์ฒ์ frozen๊ณผ game์ ๊ฒ์ํ์ ๋๋ง API๊ฐ ํธ์ถ๋๊ณ  ์ดํ์ ๊ฒ์ํ frozen๊ณผ game์ ์บ์ฑ๋ ๊ฐ์ ๋ฆฌํดํจ์ ์ ์ ์๋ค.

<br />

## ๐ skeleton ์ฌ์ฉ๊ธฐ

์ผ๋ถ ์ด๋ฏธ์ง๊ฐ ๋ก๋๋๊ธฐ๊น์ง ์๊ฐ์ด ๊ฝค๋ ๊ฑธ๋ ธ๋ค.
์น ์ฌ์ฉ์ฑ์ ๋์ด๊ณ ์ ์ด๋ฏธ์ง๊ฐ ๋ก๋๋๊ธฐ ์ ๊น์ง๋ ์ค์ผ๋ ํค ์ปดํฌ๋ํธ๋ฅผ ๋ณด์ด๋๋ก ๊ฐ์ ํด๋ณด์๋ค.

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/76807107/214029701-9b33b3f6-3f79-43b4-aede-61aaf9d8b718.gif)

<br />

> Slow 3G๋ก ์ค์ ํ ํ ๊ฒ์ํ ๊ฒฝ์ฐ

![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/76807107/214037191-761b34e6-58ba-42af-adfe-e096f0391d35.gif)

```javascript
import { useEffect, useState } from "react";
import Box from "./common/Box";

const PosterImage = ({ src }) => {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
    };
  }, [src]);

  return (
    <>
      {imageSrc ? (
        <img src={src} alt="poster" />
      ) : (
        <Box width={180} height={240} />
      )}
    </>
  );
};

export default PosterImage;
```

์ด๋ฏธ์ง๊ฐ ๋ก๋๋๊ธฐ ์ ์๋ Skeleton์ ๋ณด์ฌ์ฃผ๋ค๊ฐ ์ด๋ฏธ์ง๊ฐ ๋ก๋๋๋ฉด ํด๋น ์ด๋ฏธ์ง๋ฅผ ๋ณด์ด๋๋ก ํ๋ค.
