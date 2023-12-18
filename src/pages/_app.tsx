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
export async function getServerSideProps({req}:any) {
  const forwarded = req.headers["x-forwarded-for"]
  const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress
  console.log("IP",ip);
  console.log(req.geo);
  console.log(req);
  
  
  
}
