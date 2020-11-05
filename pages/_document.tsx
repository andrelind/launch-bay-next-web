import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import React from "react";
import { ServerStyleSheet } from "styled-components";

interface Props {
  styleTags: any;
}

export default class MyDocument extends Document<Props> {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const page = ctx.renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <Html>
        <Head>
          {this.props.styleTags}
          <style
            dangerouslySetInnerHTML={{
              __html: `
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
              }
              `,
            }}
          />
        </Head>

        <body style={{ margin: 0 }}>
          <Main />
          <div id="select-portal" />
          <div id="modal" />
          <div id="print-mount" />
          <NextScript />
        </body>
      </Html>
    );
  }
}
