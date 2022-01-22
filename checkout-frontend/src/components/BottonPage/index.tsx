import Button from 'components/Buttons/Button';
import ButtonAjuda from 'components/Buttons/ButtonAjuda';
import './styles.css';

const BottonPage = () => {
    return (
        <div className='bottonPageButtons'>
            <ButtonAjuda color={'colorButton'} onSubmit={() => { }} text="F1 - AJUDA" />
            <div className='buttonsAcao'>
                <Button color={'colorButtonRed'} onSubmit={() => { }} text="F3 - CANCELAR" />
                <Button color={'colorButtonGreen'} onSubmit={() => { }} text="F4 - FECHAR VENDA" />
            </div>
        </div>
    )
}

export default BottonPage;