import { createGlobalStyle } from "styled-components";
import SpoqaSansBold from "../font/SpoqaHanSansNeo-Bold.woff";
import SpoqaSansLight from "../font/SpoqaHanSansNeo-Light.woff";
import SpoqaSansMedium from "../font/SpoqaHanSansNeo-Medium.woff";
import SpoqaSansRegular from "../font/SpoqaHanSansNeo-Regular.woff";
import SpoqaSansThin from "../font/SpoqaHanSansNeo-Thin.woff";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset};

  @font-face {
    font-family: 'SpoqaHanSansNeo-Bold';
    src: local('SpoqaHanSansNeo-Bold'),
    url(${SpoqaSansBold}) format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'SpoqaHanSansNeo-Light';
    src: local('SpoqaHanSansNeo-Light'),
    url(${SpoqaSansLight}) format('woff');
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'SpoqaHanSansNeo-Medium';
    src: local('SpoqaHanSansNeo-Medium'),
    url(${SpoqaSansMedium}) format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'SpoqaHanSansNeo-Regular';
    src: local('SpoqaHanSansNeo-Regular'),
    url(${SpoqaSansRegular}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'SpoqaHanSansNeo-Thin';
    src: local('SpoqaHanSansNeo-Thin'),
    url(${SpoqaSansThin}) format('woff');
    font-weight: 100;
    font-style: normal;
  }

  body {
    background-color: #141414;
	color: red;
    font-family: 'SpoqaHanSansNeo-Bold'; // 이 부분을 원하는 폰트로 변경
  }

  h1{
	font-size: 1.3rem;
	font-family: 'SpoqaHanSansNeo-Medium';
  }

  p{
    font-size: 1rem;
    font-family: 'SpoqaHanSansNeo-Medium';
  }
    p1{
    font-size: 0.8rem;
    font-family: 'SpoqaHanSansNeo-Medium';
  }
   p2{
    font-size: 0.8rem;
    font-family: 'SpoqaHanSansNeo-Light';
  }
`;

export default GlobalStyles;
