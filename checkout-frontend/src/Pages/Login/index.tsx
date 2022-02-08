import './styles.scss';
import { useNavigate } from 'react-router-dom';
import React, { FormEvent, useState } from 'react';
import API from 'Services/API';

const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const login = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(name,password)
        API.post('/login', {
            username: name,
            password: password
        }).then((response) => {
            let data = response.data
            localStorage.setItem('token', data.token);
            navigate('/');
            console.log(data)
        }).catch((error)=>{
            alert(error)
        })
        
    }

    return (
        <>
            <div className='fundo'>
                <div className='campos col-5'>
                    <form onSubmit={login}>
                        <div>
                            <input
                                name='user'
                                id='user'
                                type='text'
                                placeholder='Usuario'
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                name='password'
                                id='password'
                                type='password'
                                placeholder='Senha'
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value )}
                            />
                            <button type='submit'>Entrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>

    )


}

export default Login;