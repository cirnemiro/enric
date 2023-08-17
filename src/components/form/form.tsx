import { useForm } from "react-hook-form";
import style from "./form.module.scss"
import { useState } from "react";


export interface IForm{
  inputs: IInputs[],
  onSubmit: any,
  buttonText: string
}

export interface IInputs{
    type:string,
    name:string,
    regexp?:string,
    palceholder?:string,
    label?:string
}

export default function Form({
    inputs,
    onSubmit,
    buttonText
}:IForm){

    const { handleSubmit, register,  } = useForm()

    const [loading, setLoading] = useState<boolean>(false)

    const handleSubmitLoadingState = async (formData:any) => {
        setLoading(true)
        const {data,error} = await onSubmit(formData)
        setLoading(false)

        if(error){
           return console.log("there was an error submiting the form");
        }

        console.log("there was no errors submiting the form: ", {data,error});    
    }

    return(
        <form className={style.form} onSubmit={handleSubmit(handleSubmitLoadingState)}>
          {
            inputs.map((input)=>{
                return(
                    <>
                        {input.label && <label>{input.label}</label>}
                        <input key={`${input.type}${input.name}`} type={input.type} {...register(input.name)} className={style.form__input}/>
                    </>
                )
            })
          }
            <button className={style.form__button}>{loading ? "loading..." : buttonText}</button>
        </form>
    )
}