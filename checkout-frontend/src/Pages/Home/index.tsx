import BottonGrid from 'components/BottonGrid';
import BottonPage from 'components/BottonPage';
import Button from 'components/Buttons/Button';
import DataGrid from 'components/DataGrid';
import LogoPage from 'components/HeaderPage/LogoPage';
import LogoSefaz from 'components/HeaderPage/LogoSefaz';
import Help from 'components/Help';
import Image from 'components/Image';
import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';
import ModalFinalizarVenda from 'components/Modals/ModalFinalizarVenda';
import FormaPagamento from 'Pages/FormaPagamento';
import Input from 'components/inputs/Input';
interface ProdutosItem {
    id: number;
    name: string;
    unitMeasure: string;
    unitaryValue: number;
    quantity: number;
    amount: number;
}

const Home = () => {
    let quantity = 0.0, amount = 0.0;
    const [enabledHelp, setEnabledHelp] = useState(false);
    const [enabled, setEnabled] = useState(true);
    const [produto, setProduto] = useState<ProdutosItem>();
    const [produtos, setProdutos] = useState<ProdutosItem[]>([]);
    const [modalIsOpen, setIsOpen] = useState(false);
    

    useEffect(() => {
        if (produto?.id !== undefined) {
            setEnabled(!enabled);
            setProdutos(produtos.concat({
                id: produto?.id!,
                name: produto?.name!,
                quantity: produto?.quantity!,
                unitMeasure: produto?.unitMeasure!,
                unitaryValue: produto?.unitaryValue!,
                amount: produto?.amount!
            })
            );
        }

    }, [produto]);

    produtos.map((item) => {
        if (produtos.length > 0) {
            quantity += item.quantity;
            amount += item.amount;
        }
    });

    return (
        <>
            <div className="home">
                <div className='leftTop'></div>
                <div className='rightTop'></div>
                <div className='right'></div>
                <div className='container-center'>
                    <div className="container-header">
                        <LogoPage />
                        <LogoSefaz />
                    </div>
                    <Input setProps={setProduto} />
                    <Button disabled={false} color='colorButtonBlue' text='F2 - Pesquisar' onSubmit={() => { setIsOpen(!modalIsOpen); }} />
                    <div className="imgAndGrid">
                        <div className="panelImg">
                            <Image path="https://s3-alpha-sig.figma.com/img/7fc9/aa7f/0aaf16699c590f29534131e559665cd0?Expires=1643587200&Signature=acMejlFFMA0~zp~jfRRSFopBl-tTHsNVMy3r-VL1DxgQ2j1N6XkeDEukD882rnrSNYZwNxYDdi3WLc90NffrzKC9-kBj2NoowyO3GHSEhx7aT4jiI1Q1oSfplpAabKoSwLst35IN1oK~QSBThT4hWLoQHzQAYJSHe4-mnHKeMYc8gyl~ODsG41GhMNbMKVg3QhedHGYzoxv9-Gu-5agVka6r0Pmf5VJ5w9A7QTyAXk4I5BFxoXgLir3GVHobJSAy0yWtxsVYUfqqYXpABimlNkcnCa~iMk7iqBcXa5BO-4r1-gkROZrCfEmUckvaMmXVnxgugYshuC~XRnfh0W4akg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                        </div>
                        <div className="panelGrid">
                            <div className='dataGrid'>
                                <DataGrid produtos={produtos} />
                            </div>
                            <div className='bottonGrid'>
                                <BottonGrid qtdTotal={quantity} subTotal={amount} valueTotal={amount} desconto={0} />
                            </div>
                        </div>
                    </div>
                    <div className="container-botton">
                        <BottonPage disabled={enabled} onChange={() => setEnabledHelp(!enabledHelp)} amount={amount} />
                    </div>
                    {modalIsOpen ? <ModalFinalizarVenda amount={amount} onClose={()=>setIsOpen(!modalIsOpen)}/> : null}
                </div>
            </div>
            {enabledHelp ? <Help onChange={() => setEnabledHelp(!enabledHelp)} /> : null}

        </>
    )
}

export default Home;