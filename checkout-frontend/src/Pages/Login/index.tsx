import './styles.scss';
import { useNavigate } from 'react-router-dom';
import React, { FormEvent, useEffect, useState } from 'react';
import logar from 'Services/Login';
const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    // useEffect(() => {
    //     let token = localStorage.getItem("token");
    //     console.log(token);
    //     navigate("/home");
    // }, [navigate]);
    const  login = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(await logar(name,password))
    };

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
                                onChange={(e)=>setName(e.target.value)}
                            />

                            <input
                                name='password'
                                id='password'
                                type='password'
                                placeholder='Senha'
                                required
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
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