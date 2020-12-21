import App, { AppContext, AppInitialProps } from 'next/app';
import React from 'react';
import { GlobalStyles } from '../page-components/theme';
import '../public/static/css/tailwind.css';
import { wrapper } from '../store';

class LaunchBayNextApp extends App<AppInitialProps> {
  public static getInitialProps = async ({ Component, ctx }: AppContext) => {
    return {
      pageProps: {
        // Call page-level getInitialProps
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}),
      },
    };
  };

  public render() {
    const { Component, pageProps } = this.props;

    return (
      <div>
        <GlobalStyles />
        <Component {...pageProps} />
      </div>
    );
  }
}

export default wrapper.withRedux(LaunchBayNextApp);
