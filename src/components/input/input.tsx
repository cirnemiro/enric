import { useForm } from "react-hook-form";
import InputLabel from "../input/input.module.scss";
import style from "./input.module.scss"


export interface IInput{
    type: string,
    classname?: string,
    name: string,
}

export default function Input({classname,type,name,}:IInput){
    console.log(name);
    
    return <input className={`${classname?? ""} ${style.input}`} type={type}/>
}