import Button from 'components/Buttons/Button';
import ButtonAjuda from 'components/Buttons/ButtonAjuda';
import { Link } from 'react-router-dom';
import './styles.css';
type Props = {
    onChange: Function;
    amount: number;
    disabled: boolean
}


const BottonPage = ({onChange, amount, disabled}: Props) => {
    return (
        <>
            <div className='bottonPageButtons'>
                <ButtonAjuda color={'colorButton'} onChange={() => onChange()} text="F1 - AJUDA" />
                <div className='buttonsAcao'>
                    <Button onSubmit={()=>{}} disabled={disabled} color={'colorButtonRed'}  text="F3 - CANCELAR" />
                    <Link to={`/formapagamento/${amount}`}><Button onSubmit={()=>{}} disabled={disabled} color={'colorButtonGreen'}  text="F4 - FECHAR VENDA" /></Link>
                </div>
            </div>
        </>
    )
}

export default BottonPage;