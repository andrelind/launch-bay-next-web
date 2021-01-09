import { Provider } from 'next-auth/client';
import App, { AppContext, AppInitialProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
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
      <Provider session={pageProps.session}>
        <Head>
          <title>Launch Bay Next</title>
          <meta property="og:title" content="Launch Bay Next" key="title" />
          <meta
            property="og:description"
            content="Launch Bay Next is a fast and easy to use squadron builder for X-Wing Miniatures by Atomic Mass Games"
          />
          <meta property="og:url" content="https://launchbaynext.app" />
          <meta
            property="og:image"
            content="https://launchbaynext.app/android-chrome-192x192.png"
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff3069" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#242a2e" />
        </Head>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default wrapper.withRedux(LaunchBayNextApp);
