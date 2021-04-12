import { ParsedRequest } from './types';

function getCss(image: string) {
    
    return `
    /* http://meyerweb.com/eric/tools/css/reset/
    v2.0 | 20110126
    License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  body {
    padding: 0;
    margin: 0;
    background: red;
  }
  
  .container {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    background: white;
    margin: 0;
    width: 1200px;
    height: 630px;
    padding: 0;
    position: relative;
  }
  
  
  .zesnuly {
    width: calc(690px);
  }
  
  .zesnuly .title {
    font-size: 75px;
    color: #000000;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    margin-top: 100px;
    margin-left: 50px;
    width: calc(100% - 100px);
  }
  
  .zesnuly p {
    font-family: 'Poppins', sans-serif;
    font-size: 35px;
    font-weight: 400;
    color: #7C7C7C;
    width: calc(100% - 100px);
    margin-top: 50px;
    margin-left: 50px;
  }
  
  .zesnuly img {
    width: 310px;
    position: absolute;
    bottom: 50px;
    left: 50px;
  }
  
  .zesnulyImg {
    background: url("${image}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: calc(100% - 690px);
    height: 100%;
  }`;
}

export function getHtml(parsedReq: ParsedRequest) {
    const { zesnuly, datum, image } = parsedReq;
    return `<!DOCTYPE html>
    <html>
      <meta charset="utf-8">
      <title>Generated Image</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
      <style>
        ${getCss(image)}
      </style>
      <body>
    
        <div class="container">
    
          <div class="zesnuly">
            <div class="title">${zesnuly}</div>
            <p>${datum}</p>
            <img src="https://zaveti.goodbye.cz/static/media/logo.15346b78.svg" alt="Goodbye.cz" />
          </div>
          
          <div class="zesnulyImg">
          </div>
    
        </div>
      </body>
    </html>`;
}

