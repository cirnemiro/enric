import InputLabel from "../input/input.module.scss";
import style from "./input.module.scss"


export interface IInput{
    type: string,
    classname?: string
}

export default function Input({classname,type}:IInput){
    return <input className={`${classname?? ""} ${style.input}`} type={type}/>
}