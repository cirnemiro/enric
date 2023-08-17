import { supabase } from "@/clients/supabase";
import { log } from "console";

export async function login(parameters:{email:string,password:string}) {

  const {email,password} = parameters

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  })
  
  console.log(data, error);
  
    return { data, error };
  }

export async function signUp(parameters:{email:string,password:string}){

  const {email,password} = parameters
  
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  })

  return { data, error };
}

export async function logout(){
    const { error } = await supabase.auth.signOut();
    return error;
}