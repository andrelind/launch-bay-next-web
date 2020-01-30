import '../static/css/empty.css';

import SideBarComponent from '@components/sidebar';
import { Actions } from 'actions/';
import withRedux from 'next-redux-wrapper';
import App, { AppContext, AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { parseCookies, setCookie } from 'nookies';
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import Sidebar from 'react-sidebar';
import { Store } from 'redux';
import { AppState } from 'store/state';
import styled, { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';
import useMedia from 'use-media';

import themes, { GlobalStyles } from '../page-components/theme';
import { initializeStore } from '../store';

interface Props extends AppProps {
  store: Store<AppState, Actions>;
  darkTheme: boolean;
}

const Background = styled.div`
  display: 'flex';
  height: '100vh';
  background-color: ${p => p.theme.backgroundSecondary};
`;

const LaunchBayNextApp = ({
  store,
  Component,
  pageProps,
  darkTheme,
}: Props) => {
  const { value } = useDarkMode(darkTheme, {
    onChange: val => setCookie(undefined, 'theme', val ? 'dark' : 'light', {}),
  });
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [docked, setDocked] = useState(true);
  const isWide = useMedia({ minWidth: 800 });

  const theme =
    value && router.pathname !== '/print' ? themes.dark : themes.light;

  useEffect(() => setDocked(isWide), [isWide]);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Background id={'bg'}>
          <div style={{ flex: '1 1 auto', overflow: 'auto' }}>
            <GlobalStyles />
            {router.pathname !== '/print' && (
              <Sidebar
                sidebar={
                  router.pathname !== '/print' && (
                    <SideBarComponent darkMode={value} />
                  )
                }
                open={open}
                docked={docked}
                onSetOpen={setOpen}
                shadow={false}
              >
                <Component {...pageProps} onShowMenu={setOpen} />
              </Sidebar>
            )}
            {router.pathname === '/print' && <Component {...pageProps} />}
          </div>
        </Background>
      </ThemeProvider>
    </Provider>
  );
};

LaunchBayNextApp.getInitialProps = async (ctx: AppContext) => {
  const app = await App.getInitialProps(ctx);
  const { theme } = parseCookies(ctx.ctx);
  return { ...app, darkTheme: theme === 'dark' || theme === undefined };
};

export default withRedux(initializeStore, { debug: false })(LaunchBayNextApp);
