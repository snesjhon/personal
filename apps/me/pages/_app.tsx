import type { AppProps } from "next/app";
import { FunctionComponent } from "react";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  const C = Component as FunctionComponent;
  return <C {...pageProps} />;
}

export default MyApp;
