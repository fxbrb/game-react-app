import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
}

html {
     &::-webkit-scrollbar {
          width: 0.5rem;
     }
     &::-webkit-scrollbar-thumb {
          background-color: darkgray;
     }
     &::-webkit-scrollbar-track {
          background-color: white;
     }
}
body {
     font-family: 'Montserrat', sans-serif;
     width: 100%;
}

h2 {
     font-size: 3rem;
     font-family: 'Abril Fatface', cursive;
     font-weight: lighter;
     color: #333;
}

h3 {
     font-size: 1.3rem;
     color: #333;
     padding: 1.5rem 0;
}

p {
     font-size: 1rem;
     line-height: 200%;
     color: #333;
}

a {
     text-decoration: none;
     color: #333;
}

img {
     display: block;
}

input {
     font-weight: bold;
     font-family: "Montserrat", sans-serif;
}

.active-filter {
     background: #3e8dca !important;
}
`;

export default GlobalStyles;
