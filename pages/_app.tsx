import "@/styles/globals.css";
import type { AppProps } from "next/app";
import StoreProvider from "@/redux/StoreProvider";
import { getAuth } from "firebase/auth";
import AuthListener from "@/components/AuthListener";
import { auth } from "@/Firebase/firebase.config";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <AuthListener>
        <Component {...pageProps} />;
      </AuthListener>
    </StoreProvider>
  );
}
