import App, { AppContext, AppProps } from "next/app";
import React, { FC } from "react";
import { ThemeProvider } from "styled-components";
import themes, { GlobalStyles } from "../page-components/theme";
import "../static/css/tailwind.css";
import { wrapper } from "../store";

interface Props extends AppProps {
  // darkTheme: boolean;
}

const LaunchBayNextApp: FC<Props> = ({ Component, pageProps }) => {
  // const { value } = useDarkMode(darkTheme, {
  //   onChange: (val) =>
  //     setCookie(undefined, "theme", val ? "light" : "dark", {}),
  // });

  // const theme =
  //   value && router.pathname !== "/print" ? themes.dark : themes.light;

  return (
    <ThemeProvider theme={themes.light}>
      <GlobalStyles />

      <Component {...pageProps} />
    </ThemeProvider>
  );
};

// @ts-ignore
LaunchBayNextApp.getInitialProps = async (ctx: AppContext) => {
  return App.getInitialProps(ctx);
};

// @ts-ignore
// LaunchBayNextApp.getInitialProps = async (ctx: AppContext) => {
//   const app = await App.getInitialProps(ctx);
//   // const { theme } = parseCookies(ctx.ctx);
//   return { ...app, darkTheme: false };
//   // return { ...app, darkTheme: theme === "dark" || theme === undefined };
// };

export default wrapper.withRedux(LaunchBayNextApp);
