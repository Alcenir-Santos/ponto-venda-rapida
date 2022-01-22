import './styles.css';

const DataGrid = () => {
    return (
        <>
            <table className='table'>
                <thead className='CabecalhoGrid'>
                    <tr>
                        <th className='col-1'>Item</th>
                        <th className='col-2'>Produto</th>
                        <th className='col-3'>UN</th>
                        <th className='col-4'>Vr.Unit</th>
                        <th className='col-5'>QTD</th>
                        <th className='col-6'>Vr.Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>GTX GEFORCE</td>
                        <td>PC</td>
                        <td>2500,00</td>
                        <td>1</td>
                        <td>2500,00</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default DataGrid;