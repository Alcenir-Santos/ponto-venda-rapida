import './styles.css';

type Props = {
    onSubmit: Function;
    text: string;
    color: string;
}

const ButtonAjuda = ({ onSubmit, text, color }: Props) => {
    return (
        <p className="helpButton">
            <button className={`${color}`} onClick={() => onSubmit}><span className='textButtonHelp'>{text}</span></button>
        </p>
    );
}

export default ButtonAjuda;