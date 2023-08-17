import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import style from './modal.module.scss'

interface IModal{
    children: JSX.Element,
    onCancel?: ()=>{},
    onSave?: ()=>{},
    setVisible:Dispatch<SetStateAction<boolean>>,
    visible: boolean

}

const Modal = ({children, onCancel, onSave, visible, setVisible}:IModal) =>{

    const onClose = () =>{
        setVisible(false)
    }

    return(
        <div className={style.modal} style={{visibility:visible ? 'visible' : 'hidden'}}>
            <div className={style.modal__content}>
                <div className={style.modal__content__header}>
                    <div onClick={onClose}>X</div>
                </div>
                <div className={style.modal__content__children}>
                    {children}
                </div>
                <div className={style.modal__content__footer}>
                    {onCancel && <button onClick={onCancel}>Cancel</button>}
                    {onSave && <button onClick={onSave}>Save</button>}
                </div>
            </div>
        </div>
    )
}

export default Modal