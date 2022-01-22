import BottonGrid from 'components/BottonGrid';
import BottonPage from 'components/BottonPage';
import Button from 'components/Buttons/Button';
import DataGrid from 'components/DataGrid';
import LogoPage from 'components/HeaderPage/LogoPage';
import LogoSefaz from 'components/HeaderPage/LogoSefaz';
import Image from 'components/Image';
import Input from 'components/Input';
import './styles.css';

const Home = () => {
    
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
                    <Input />
                    <Button color='colorButtonBlue' text='F2 - Pesquisar' onSubmit={() => { }} />
                    <div className="imgAndGrid">
                        <div className="panelImg">
                            <Image path="https://s3-alpha-sig.figma.com/img/7fc9/aa7f/0aaf16699c590f29534131e559665cd0?Expires=1643587200&Signature=acMejlFFMA0~zp~jfRRSFopBl-tTHsNVMy3r-VL1DxgQ2j1N6XkeDEukD882rnrSNYZwNxYDdi3WLc90NffrzKC9-kBj2NoowyO3GHSEhx7aT4jiI1Q1oSfplpAabKoSwLst35IN1oK~QSBThT4hWLoQHzQAYJSHe4-mnHKeMYc8gyl~ODsG41GhMNbMKVg3QhedHGYzoxv9-Gu-5agVka6r0Pmf5VJ5w9A7QTyAXk4I5BFxoXgLir3GVHobJSAy0yWtxsVYUfqqYXpABimlNkcnCa~iMk7iqBcXa5BO-4r1-gkROZrCfEmUckvaMmXVnxgugYshuC~XRnfh0W4akg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                        </div>
                        <div className="panelGrid">
                            <div className='dataGrid'>
                                <DataGrid />
                            </div>
                            <div className='bottonGrid'>
                                <BottonGrid qtdTotal={1} subTotal={2500.00} valueTotal={2500.00} desconto={0} />
                            </div>
                        </div>
                    </div>
                    <div className="container-botton">
                        <BottonPage/>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home;