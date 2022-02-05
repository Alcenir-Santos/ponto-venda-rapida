import './styles.css';
import { ReactComponent as IconReturn } from 'assets/img/seta.svg';
type Props = {
    onChange: Function;
}

const Help = ({ onChange }: Props) => {

    return (
        <>
                <div className={`menuHelp`}>
                    <div className="titleHelp">
                        <span>FOX<span>Shop</span></span>
                    </div>
                    <div className="opcoes">
                        <ul className="atalhos">
                            <li>ALT + A</li>
                            <li>ALT + C</li>
                            <li>ALT + F</li>
                            <li>ALT + I</li>
                            <li>ALT + M</li>
                            <li>ALT + O</li>
                            <li>ALT + P</li>
                            <li>ALT + Q</li>
                            <li>ALT + S</li>
                            <li>ALT + T</li>
                            <li>ALT + V</li>
                            <li>E</li>
                        </ul>
                        <ul className="descriptions">
                            <li>Desconto da venda</li>
                            <li>Cancelar a venda</li>
                            <li>editar NCM e CEST</li>
                            <li>Cancelar item na venda</li>
                            <li>Relatorio de caixa</li>
                            <li>Tela de Configurações</li>
                            <li>Desconto item</li>
                            <li>Informar Quantidade</li>
                            <li>Sangria de caixa</li>
                            <li>Formas de pagamento</li>
                            <li>Suprimento de caixa</li>
                            <li>Endereço de entrega</li>
                        </ul>
                    </div>
                    <div className='bottonDisableHelp'>
                        <button className='buttonDisableHelp' onClick={() => onChange()}>
                            <div>
                                <IconReturn className='iconReturn' />
                            </div>
                            <span>VOLTAR</span>
                        </button>
                    </div>
                </div>
        </>
    );
}

export default Help;