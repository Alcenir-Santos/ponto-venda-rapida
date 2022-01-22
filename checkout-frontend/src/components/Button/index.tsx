import './styles.css';

type Props = {
    onSubmit: Function;
    text: string;
    color: string;
}

const Button = ({ onSubmit, text, color }: Props) => {
    return (
        <>
            <button className={`${color}`} onClick={() => onSubmit}>{text}</button>
        </>
    );
}

export default Button;