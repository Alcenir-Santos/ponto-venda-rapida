import './styles.scss';

interface Props{
    amount:number;
    amountpaid: number;
}

const BottonPayment = ({amount,amountpaid}: Props) => {
    return(
        <div className='valuesTotaisPayment'>
            <div className="valuesPayments">
                <h1>Totalizadores</h1>
                <div>
                    <label>
                        <span>Valor total: {amount}</span>
                        <span>Valor pago: {amountpaid}</span>
                    </label>
                    <label>
                        <span>Valor restante: {(amount - amountpaid).toFixed(2)}</span>
                    </label>
                </div>
            </div>
            <button>FECHAR VENDA</button>
        </div>
    )
}

export default BottonPayment;