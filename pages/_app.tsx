import "@/styles/globals.css";
import type { AppProps } from "next/app";
import StoreProvider from "@/redux/StoreProvider";
import AuthListener from "@/components/AuthListener";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <AuthListener>
        <main className={roboto.className}>
          <Component {...pageProps} />;
        </main>
      </AuthListener>
    </StoreProvider>
  );
}
