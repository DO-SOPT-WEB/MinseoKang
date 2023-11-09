import { createGlobalStyle } from "styled-components";
import SpoqaSansBold from "../font/SpoqaHanSansNeo-Bold.woff";
import SpoqaSansLight from "../font/SpoqaHanSansNeo-Light.woff";
import SpoqaSansMedium from "../font/SpoqaHanSansNeo-Medium.woff";
import SpoqaSansRegular from "../font/SpoqaHanSansNeo-Regular.woff";
import SpoqaSansThin from "../font/SpoqaHanSansNeo-Thin.woff";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
 ${reset};

    body{
	background-color: #141414;
	font-family: 'SpoqaSansBold';
 }
  @font-face {
        font-family: 'SpoqaSansBold';
        src: local("SpoqaSansBold"),
        url(${SpoqaSansBold}) format('woff');
        font-weight: 500;
        font-style: normal;}
  }
    @font-face {
        font-family: 'SpoqaSansLight';
        src: local("SpoqaSansLight"),
        url(${SpoqaSansLight}) format('woff');
        font-weight: 500;
        font-style: normal;}
  }
    @font-face {
        font-family: 'SpoqaSansMedium';
        src: local("SpoqaSansMedium"),
        url(${SpoqaSansMedium}) format('woff');
        font-weight: 500;
        font-style: normal;}
  }
    @font-face {
        font-family: 'SpoqaSansRegular';
        src: local("SpoqaSansRegular"),
        url(${SpoqaSansRegular}) format('woff');
        font-weight: 500;
        font-style: normal;}
  }
    @font-face {
        font-family: 'SpoqaSansThin';
        src: local("SpoqaSansThin"),
        url(${SpoqaSansThin}) format('woff');
        font-weight: 500;
        font-style: normal;}
  }

  `;
export default GlobalStyles;
