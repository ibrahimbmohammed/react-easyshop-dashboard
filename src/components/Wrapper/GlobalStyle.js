import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Roboto Condensed', sans-serif;
    font-family: 'Montserrat', sans-serif;

}
h1{
    font-size:32px;
}
h2{
    font-family: 'Roboto', sans-serif;
    font-weight:300;
}
p{
    font-size:12px;
}
small{
    font-size:10px;
}

`;
export default GlobalStyle;
