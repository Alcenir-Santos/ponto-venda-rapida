import CartaoCredito from 'components/TiposPagamentos/CartaoCredito';
import { Link, useParams } from 'react-router-dom';
import './styles.scss';



const FormaPagamento = () => {
    const params = useParams();
    let amount = Number(params.amount); 

    
    return (
        <div className="etapas">
            <div className="clienteFormaPagamento">
                <div className='dadosCliente'>
                    <div className='cabecalhoEtapa'>
                        <Link to='/home'>{'<'}</Link>
                        <div className='etapa'>1</div>
                        <span>Escolha o cliente</span>
                    </div>
                    <div className='infoCliente'>
                        <div>
                            <span className='codCliente'>
                                <label>Cod.Cliente</label>
                                <input type="text" />
                            </span>
                            <span className='nomeCliente'>
                                <label>Nome</label>
                                <input type="text" />
                            </span>
                        </div>
                        <span className='endEntrega'>
                            <label>Endereço de Entrega</label>
                            <input type="text" />
                        </span>
                    </div>
                </div>
                <div className='pagamentos'>
                    <div className='cabecalhoEtapa'>
                        <div className='etapa'>2</div>
                        <span>Forma de pagamento</span>
                    </div>
                    <div className='formasPagamento'>
                        <label>
                            <input type="radio" name="radio" />
                            <span>Pix</span>
                        </label>
                        <label>
                            <input type="radio" name="radio" />
                            <span>Picpay</span>
                        </label>
                        <label>
                            <input type="radio" name="radio" checked/>
                            <span>Cartão</span>
                        </label>
                        <label>
                            <input type="radio" name="radio" />
                            <span>Dinheiro</span>
                        </label>
                        <label>
                            <input type="radio" name="radio" />
                            <span>Cheque</span>
                        </label>
                    </div>
                </div>
            </div>
            <div className="tipoPagamento">
                <CartaoCredito amount={amount} />
            </div>
        </div>
    )
}

export default FormaPagamento;