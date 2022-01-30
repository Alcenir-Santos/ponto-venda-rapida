import Button from 'components/Buttons/Button';
import ButtonAjuda from 'components/Buttons/ButtonAjuda';
import { Link } from 'react-router-dom';
import './styles.css';
type Props = {
    onChange: Function;
    redirect: Function;
    amount: number;
    disabled: boolean
}


const BottonPage = ({onChange, redirect,amount, disabled}: Props) => {
    console.log('BottonPage',disabled)
    return (
        <>
            <div className='bottonPageButtons'>
                <ButtonAjuda color={'colorButton'} onChange={() => onChange()} text="F1 - AJUDA" />
                <div className='buttonsAcao'>
                    <Button disabled={disabled} color={'colorButtonRed'} onSubmit={() => redirect()} text="F3 - CANCELAR" />
                    <Link to={`/formapagamento/${amount}`}><Button disabled={disabled} color={'colorButtonGreen'} onSubmit={() => redirect()} text="F4 - FECHAR VENDA" /></Link>
                </div>
            </div>
        </>
    )
}

export default BottonPage;