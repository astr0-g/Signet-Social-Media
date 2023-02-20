import { createGlobalStyle } from "styled-components"
import NunitoSansRegular from "../fonts/NunitoSans-Regular.ttf"
import NunitoSansBlack from "../fonts/NunitoSans-Black.ttf"
import BebasNeue from "../fonts/BebasNeue-Regular.ttf"

const GlobalStyles = createGlobalStyle`

// *{
//     outline: 1px solid red !important;
// }

@font-face {
font-family: "BebasNeue";
src: local("BebasNeue-Regular"),
 url(${BebasNeue}) format("truetype");
}

@font-face {
font-family: "NunitoSansRegular";
src: local("NunitoSans-Regular"),
 url(${NunitoSansRegular}) format("truetype");
}

@font-face {
font-family: "NunitoSansBlack";
src: local("NunitoSans-Black"),
 url(${NunitoSansBlack}) format("truetype");
}

*,*::before,*::after{
    margin: 0;
    padding: 0;
}

*{
    box-sizing: border-box;
}
:root {
  --page-count: 11;
  --page-scroll: 45;
  --underline: rgba(64,64,64,0.4);
  --spine: #000;
  --cover: #1a1a1a;
  --bg: #4d4d4d;
  --insert: #d9d9d9;
  --page: #e6e6e6;
}
body {
  width: 100vw;
  height: calc(((var(--page-count) + 2) * var(--page-scroll)) * 1vh);
  background: url('https://img.freepik.com/free-vector/winter-blue-pink-gradient-background-vector_53876-117276.jpg?w=1380&t=st=1664927615~exp=1664928215~hmac=ee9903f0464205758f6a51e54643d1e7ee843739d19e8e8bbc7b98133271270f');
  background-position: center;
  background-size: cover;
  overflow-x: hidden;
  font-family: "NunitoSansRegular";
}

h1, h2, h3, h4, h5, h6{
    margin: 0;
    padding: 0;

}

a{
    color: inherit;
    text-decoration: none;
}

img{
  width: 90%;
  height: 90%;
  -o-object-fit: center;
     object-fit: center;
  z-index: 2;
}

`

export default GlobalStyles
