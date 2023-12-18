import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import { useCookie } from "react-use";
import { useRouter } from "next/router";
import {login, logout} from "@/utils/auth"
import Login from "@/components/login";
import { supabase } from "@/clients/supabase";
import { log } from "console";

export function useAuthProvider() {
  const [user, setUser] = useState<User | null>(null);
  const [guest, setGuest] = useState<boolean>(false)
  const [cookie, setCookie, deleteCookie] = useCookie("token");
 

  useEffect(() => {
    
    // Check active sessions and sets the user

    // const session = supabase.auth.session();

    // setUser(session?.user ?? null);

    // Listen for changes on auth state (logged in, signed out, etc.)
    const { data: listener } = supabase.auth.onAuthStateChange(async (event:any, session:any) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        setCookie(session.access_token);
      } else {
        deleteCookie();
      }
    });

    return () => {
    //   listener?.unsubscribe();
    };
  }, []);

  return {
    user,
    login,
    logout,
    setGuest,
    guest,
  };
}

const AuthContext = createContext<ReturnType<typeof useAuthProvider>>({
  user: null,
  login,
  logout,
  setGuest:()=>{},
  guest:false,
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const value = useAuthProvider();

  // if (value.guest) {
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
  // }
  // return <AuthContext.Provider value={value}><Login/></AuthContext.Provider>;

}

export function useAuth() {
  const value = useContext(AuthContext);
  if (!value) {
    throw new Error(`The hook 'useAuth' must be used within 'AuthProvider'`);
  }
  return value;
}