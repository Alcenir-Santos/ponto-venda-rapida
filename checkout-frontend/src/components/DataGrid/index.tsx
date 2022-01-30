
import './styles.css';
type Props = {
    produtos: Array<API.ProdutosItem>;
}


const DataGrid = ({ produtos }: Props) => {
    return (
        <>
            <table className='table'>
                <thead className='CabecalhoGrid'>
                    <tr>
                        <th>Item</th>
                        <th>Produto</th>
                        <th>UN</th>
                        <th>Vr.Unit</th>
                        <th>QTD</th>
                        <th>Vr.Total</th>
                    </tr>
                </thead>
                <tbody className='corpoGrid'>
                    {
                        produtos.map((item, i) => {
                            return [
                                <tr key={i}>
                                    <td className='col-1'>{item.id}</td>
                                    <td className='col-2'>{item.name}</td>
                                    <td className='col-3'>{item.unitMeasure}</td>
                                    <td className='col-4'>{item.unitaryValue}</td>
                                    <td className='col-5'>{item.quantity}</td>
                                    <td className='col-6'>{item.amount}</td>
                                </tr>
                            ]
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default DataGrid;