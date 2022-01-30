import { useEffect, useState } from 'react';
import './styles.css';

type Props = {
    onSubmit: Function;
    text: string;
    color: string;
    disabled: boolean;
}

const Button = ({ onSubmit, text, color,disabled }: Props) => {
    const[enabled, setEnabled] = useState(true)
    console.log('Button',disabled);
    useEffect(()=>{
        setEnabled(disabled);
    },[disabled]);
    return (
        <>
            <button className={`${color}`} onClick={() => onSubmit} disabled={enabled}>{text}</button>
        </>
    );
}

export default Button;