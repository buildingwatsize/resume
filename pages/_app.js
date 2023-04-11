import { Analytics } from "@vercel/analytics/react";

import "../styles/globals.css";
import "../styles/index.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
};

export default MyApp;
