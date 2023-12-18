import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AuthProvider, useAuth } from "@/hooks/use-auth";
import Menu from "@/components/menu";
import Footer from "@/components/footer";
import { useEffect } from "react";
import { NextApiHandler } from "next";

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
        <AuthProvider>
          <Menu/>
          <Component {...pageProps} />
        </AuthProvider>
        <Footer/>
    </>
  );

}
