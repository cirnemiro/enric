import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AuthProvider, useAuth } from "@/hooks/use-auth";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { user } = useAuth();

  return (
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
  );
}