import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@400;700&family=Noto+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="text/javascript"
          src="https://cdn.omise.co/omise.js"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
