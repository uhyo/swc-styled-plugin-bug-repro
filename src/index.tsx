import { renderToString } from 'react-dom/server';
import { styled, ServerStyleSheet } from "styled-components";

const Div = styled.div`
  &::after {
    content: "Hello\u0020World!\u{1f64f}";
  }
`;

// Output resulting CSS as a string
const sheet = new ServerStyleSheet();
const html = renderToString(sheet.collectStyles(<Div />));
const styleTags = sheet.getStyleTags(); // or sheet.getStyleElement();

console.log(`${styleTags}
${html}`);