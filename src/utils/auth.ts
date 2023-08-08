import { supabase } from "@/clients/supabase";

export async function login(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      })
  
    return { data, error };
  }

export async function signin(){

}

export async function logout(){
    const { error } = await supabase.auth.signOut();
    return error;
}