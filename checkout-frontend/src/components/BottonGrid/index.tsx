import './styles.css';
type Props = {
    valueTotal: number;
    qtdTotal: number;
    subTotal: number;
    desconto: number;
}
const BottonGrid = ({ valueTotal, qtdTotal, subTotal, desconto }: Props) => {
    // Create our number formatter.
    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
    return (
        <>
            <div className="botton">
                <ul className='subTotalVenda'>
                    <li className='subTotais'>Quantidade: {qtdTotal}</li>
                    <li className='subTotais'>Sub-total: {formatter.format(subTotal)}</li>
                    <li className='subTotais'>Desconto: {desconto > 0 ? desconto + '%' :  desconto }</li>
                </ul>
                <ul className='totalVenda'>
                    <li>Total</li>
                    <li className='valueTotal'>{formatter.format(valueTotal)}</li>
                </ul>
            </div>
        </>
    )
}

export default BottonGrid;