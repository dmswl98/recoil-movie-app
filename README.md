# 🎬 recoil-movie-app

## 🔮 recoil 사용기

### 1️⃣ 사용 이유

- 정말 간단한 사용 방법
- 비동기 처리의 경우 별도의 라이브러리가 필요 없음
- Recoil은 보일러플레이트가 없는 API
- selector를 이용한 API 캐싱 가능

위 4가지의 이점을 경험해보고 싶어 사용하게 되었다.

<br />

### 2️⃣ Recoil은 보일러플레이트가 없는 API

최상단 컴포넌트를 RecoilRoot로 감싸기만 하면 바로 사용할 수 있다.

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

### 3️⃣ selector를 이용한 API 캐싱 가능

selector는 구독하고 있는 atom 값에 따라 새로운 값을 리턴해주는 순수 함수이다. 즉, get에 작성한 atom 값을 의존성으로 갖고 있으며, 구독하는 atom 값이 변할 때마다 새로운 값을 갱신한다.

```javascript
// 검색한 영화 제목
export const movieTitleState = atom({
  key: "movieTitleState",
  default: "",
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
```

또한, recoil은 별도의 비동기 라이브러리가 필요하지 않고, selector로 비동기를 간편하게 처리할 수 있다.
이 때, atom 값이 변하지 않는 경우 캐싱된 값을 리턴한다.

![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/76807107/214076513-fc0dd594-31bd-468e-9e61-6e5f331d24dd.gif)

처음 frozen과 game을 검색했을 때만 API가 호출되고 이후에 검색한 frozen과 game은 캐싱된 값을 리턴함을 알 수 있다.

<br />

## 💀 skeleton 사용기

일부 이미지가 로드되기까지 시간이 꽤나 걸렸다.
웹 사용성을 높이고자 이미지가 로드되기 전까지는 스켈레톤 컴포넌트를 보이도록 개선해보았다.

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/76807107/214029701-9b33b3f6-3f79-43b4-aede-61aaf9d8b718.gif)

<br />

> Slow 3G로 설정한 후 검색한 경우

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

이미지가 로드되기 전에는 Skeleton을 보여주다가 이미지가 로드되면 해당 이미지를 보이도록 했다.
