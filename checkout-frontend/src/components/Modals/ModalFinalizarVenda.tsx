import BottonPayment from 'components/BottonPayment';
import { useState } from 'react';
import Cartao from './CartaoCredito';
import Cheque from './Cheque';
import Dinheiro from './Dinheiro';
import Picpay from './Picpay';
import Pix from './Pix';
import './styles.scss';
type Props = {
    onClose: Function;
    amount: number;
}


const ModalFinalizarVenda = ({  onClose, amount }: Props) => {
    const [selectedPayment, setSelectedPayment] = useState('');
    const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedPayment(event.target.value);
    };
    const dadosPayment = (param: any) => {

        switch (param) {
            case 'dinheiro':
                return <Dinheiro />
            case 'cartao':
                return <Cartao amount={amount} />
            case 'pix':
                return <Pix />
            case 'picpay':
                return <Picpay />
            case 'cheque':
                return <Cheque />
        }

    }

    return (
        <div className="modal">
            <div className="container">
                <div className="infoCliente">
                    <div className='etapacliente'>
                        <div className='etapa'>
                            <button onClick={() => onClose()}>{'<'}</button>
                            <div>1</div>
                            <span>Escolha o cliente</span>
                        </div>
                        <div className='dadosCliente'>
                            <div>
                                <span className='inputLabel cod'>
                                    <label>Cod.Cliente</label>
                                    <input type="text" />
                                </span>
                                <span className='inputLabel cli'>
                                    <label>Nome</label>
                                    <input type="text" />
                                </span>
                            </div>
                            <span className='inputLabel end'>
                                <label>Endereço de Entrega</label>
                                <input type="text" />
                            </span>
                        </div>
                    </div>
                    <div className='etapaFormaPagamento'>
                        <div className='etapa'>
                            <div>2</div>
                            <span>Forma de pagamento</span>
                        </div>
                        <div className='formaPagamento'>
                            <label>
                                <input type="radio" name="radio" value='dinheiro' onChange={radioHandler} />
                                <span className="checkmark"></span>
                                Dinheiro
                            </label>
                            <label>
                                <input type="radio" name="radio" value='cartao' onChange={radioHandler} />
                                <span className="checkmark"></span>
                                Cartão
                            </label>
                            <label>
                                <input type="radio" name="radio" value='pix' onChange={radioHandler} />
                                <span className="checkmark"></span>
                                Pix
                            </label>
                            <label>
                                <input type="radio" name="radio" value='picpay' onChange={radioHandler} />
                                <span className="checkmark"></span>
                                Picpay
                            </label>
                            <label>
                                <input type="radio" name="radio" value='cheque' onChange={radioHandler} />
                                <span className="checkmark"></span>
                                Cheque
                            </label>
                        </div>
                        <h2>{selectedPayment}</h2>
                    </div>
                </div>
                <div className="infoPagamento">
                    <div className="headerPayment">
                        <div className='etapa'>
                            <div>3</div>
                            <span>Forma de pagamento</span>
                        </div>
                    </div>
                    <div className="bodyPayment">
                        {dadosPayment(selectedPayment)}
                    </div>
                    <div className="footerPayment">
                        <BottonPayment amount={amount} amountpaid={199.95}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModalFinalizarVenda;