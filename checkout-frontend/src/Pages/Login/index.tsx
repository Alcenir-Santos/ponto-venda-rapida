import './styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <>
            <div className='fundo'>
                <div className='logo col-5'>
                    <Link to='/home'>logar</Link>
                </div>
                <div className='campos col-5'>
                    <Link to='/home'>logar</Link>
                </div>
            </div>
        </>

    )
}

export default Login;