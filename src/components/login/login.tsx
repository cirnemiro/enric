import { login, signUp } from "@/utils/auth";
import Form, { IInputs } from "../form/form";
import { useAuth } from "@/hooks/use-auth";
import { useEffect, useState } from "react";
import Modal from "../modal";
import { log } from "console";

interface ILoginForm {}

export default function Login(){

    const { user, guest, setGuest } = useAuth()

    const [register, setRegister] = useState<boolean>(false)
    const [visible, setVisible] = useState<boolean>(false)



    const handleGuest = ()=>{
        console.log(guest);
        
        setGuest(!guest)
        console.log(guest);
    }
    
    useEffect(() => {
        console.log("guest value in effect:", guest);
      }, [guest]);

    
    const formInputs: IInputs[] = [
        { type: "text", name: "email", label: "Email" },
        { type: "password", name: "password", label: "Password" }
    ];

    if (register) {
        formInputs.push({ type: "password", name: "confirmPassword", label: "Confirm Password" });
    }

    return(
        <div>
            <div onClick={()=>{setVisible(true)}}>{register ? "Register" : "Log in"}</div>
            <Form inputs={formInputs} onSubmit={register?signUp:login} buttonText={register?"sign up":"log in"}/>
            <div onClick={()=>{setRegister(!register)}}>
                {register ? "log in here!" : "register here!"}
            </div>
            <Modal visible={visible} setVisible={setVisible}>
                <div>modal body</div>
            </Modal>
            <div>
                <button onClick={()=>{handleGuest()}}>Keep going as visiton</button>
            </div>
        </div>
    )
}