import { createGlobalStyle } from 'styled-components';

import colors, {
  black,
  buttonBlue,
  darkDimEnd,
  darkDimStart,
  darkgrey,
  darkheader,
  darkSelection,
  dimEnd,
  dimStart,
  header,
  menu,
  red,
  search,
  selection,
  yellow,
} from '../assets/colors';

export const GlobalStyles = createGlobalStyle`
    html {
        font-size: 14px;
    }
    body {
        font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
        font-size: 1.0em;
        color: ${colors.black};
        -webkit-font-smoothing: antialiased;
    }

    @font-face {
      font-family: 'x-wing-ships';
      src: url('/static/fonts/xwing-miniatures-ships.ttf');
      font-display: auto;
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: 'xwing-miniatures';
      src: url('/static/fonts/xwing-miniatures.ttf');
      font-display: auto;
      font-weight: normal;
      font-style: normal;
    }

    @media print { 
      html, body { 
        /* height: auto !important;  */
        overflow: visible !important; 
      }
      #bg {
        height: auto !important; 
        background-color: white !important;
        -webkit-print-color-adjust: exact;
      }
    }
  `;

export const dark = {
  statusBar: 'light-content',
  background: black,
  backgroundSecondary: darkheader,
  text: 'white',
  textSecondary: darkgrey,
  favourite: yellow,
  nonFavourite: darkgrey + 'A0',
  button: buttonBlue,
  menuBackground: 'white',
  menuLine: buttonBlue,
  menuText: black,
  line: black,
  unread: red,
  navigationBarIcons: search,
  shadow: black,
  searchIconBackground: search,
  searchIconBackgroundActive: buttonBlue,
  dimStart: darkDimStart,
  dimEnd: darkDimEnd,
  selectedItemBackground: darkSelection,
  colors,
};

export const light = {
  statusBar: 'dark-content',
  background: 'white',
  backgroundSecondary: header,
  text: black,
  textSecondary: darkgrey,
  favourite: yellow,
  nonFavourite: darkgrey + 'A0',
  button: buttonBlue,
  menuBackground: menu,
  menuLine: buttonBlue,
  menuText: 'white',
  line: darkgrey,
  unread: red,
  navigationBarIcons: search,
  shadow: black,
  searchIconBackground: search,
  searchIconBackgroundActive: buttonBlue,
  dimStart: dimStart,
  dimEnd: dimEnd,
  selectedItemBackground: selection,
  colors,
};

export type ThemeInterface = typeof dark;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeInterface {}
}

export default { dark, light };
