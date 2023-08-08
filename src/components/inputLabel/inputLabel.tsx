import Input, { IInput } from "../input/input"
import styles from './inputLabel.module.scss';

interface InputLabel{
    children: JSX.Element[]
}

export default function InputLabel({children}:InputLabel){
    return (
        <div className={styles.inputLabel}>
            {children}
        </div>
    )
}