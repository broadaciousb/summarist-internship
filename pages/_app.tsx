import "@/styles/globals.css";
import type { AppProps } from "next/app";
import StoreProvider from "@/redux/StoreProvider";
import AuthListener from "@/components/AuthListener";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <AuthListener>
        <Component {...pageProps} />;
      </AuthListener>
    </StoreProvider>
  );
}
