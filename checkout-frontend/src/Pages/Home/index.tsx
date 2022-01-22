import Button from 'components/Button';
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
                    <Input />
                    <Button color='colorButtonBlue' text='F2 - Pesquisar' onSubmit={() => { }} />
                    <div className="panelImg"></div>
                </div>
            </div>

        </>
    )
}

export default Home;