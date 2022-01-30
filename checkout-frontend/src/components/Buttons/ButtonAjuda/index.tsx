import './styles.css';

type Props = {
    onChange: Function;
    text: string;
    color: string;
}

const ButtonAjuda = ({ onChange, text, color }: Props) => {
    return (
        <p className="helpButton">
            <button type='button' className={`${color}`} onClick={()=>onChange()}><span className='textButtonHelp'>{text}</span></button>
        </p>
    );
}

export default ButtonAjuda;