import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { login, logOut, supabase } from "@tattoox/data";
import { User } from "@supabase/supabase-js";
import { useCookie } from "react-use";
import { useRouter } from "next/router";
import Login from "@/pages/login";


export function useAuthProvider() {
  const [user, setUser] = useState<User | null>(null);
  const [cookie, setCookie, deleteCookie] = useCookie("token");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check active sessions and sets the user
    const session = supabase.auth.session();

    setUser(session?.user ?? null);
    setLoading(false);

    // Listen for changes on auth state (logged in, signed out, etc.)
    const { data: listener } = supabase.auth.onAuthStateChange(async (event:any, session:any) => {
      setUser(session?.user ?? null);
      setLoading(false);
      if (session?.user) {
        setCookie(session.access_token);
      } else {
        deleteCookie();
      }
    });

    return () => {
      listener?.unsubscribe();
    };
  }, []);

  return {
    logged: !!user,
    user,
    login,
    logOut,
  };
}

const AuthContext = createContext<ReturnType<typeof useAuthProvider>>({
  logged: false,
  user: null,
  login,
  logOut,
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const value = useAuthProvider();

  console.log(value.logged);

  if (!value.user || !value.logged) {
    return <Login />;
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const value = useContext(AuthContext);
  if (!value) {
    throw new Error(`The hook 'useAuth' must be used within 'AuthProvider'`);
  }
  return value;
}