import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from 'assets/img/login.png';
import { ReactComponent as ImgLogo } from 'assets/img/imglogin.svg';
const Login = () => {
    return (
        <>
            <div className='fundo'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='logo col-5'>
                            <img src={Logo} alt='logo empresa' className='imgLogin' />
                        </div>
                        <div className='campos col-5'>
                            <ImgLogo className='logo2' />
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Login;