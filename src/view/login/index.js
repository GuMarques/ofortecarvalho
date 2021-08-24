import React, {useState} from 'react';
import './login.css';
import { Link } from 'react-router-dom'

import firebase from '../../config/firebase';
import 'firebase/auth';
function Login() {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();

    function autenticar() {
        firebase.auth().signInWithEmailAndPassword(email, senha).then( resultado => {
            alert('Login');
        })
        .catch( erro => {
            setMsgTipo('erro');
        })
    }

    return (
        <section id='login'>
            <div className='login-container'>
                <a href='index.html'><img className='icone' src='/src/icones/arrow-left.svg' alt='voltar' /></a>
                <div className='text-container'>
                    <h1>Login</h1>
                    <p>Por favor preencha os campos abaixo</p>
                </div>
                <form>
                    <div className='input-container'>
                        <div className="form-floating">
                            <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email</label>
                        </div>
                    </div>
                    <div className='input-container'>
                        <div className="form-floating">
                            <input type="password" onChange={(e) => setSenha(e.target.value)} className="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Senha</label>
                        </div>
                    </div>
                    <button type="button" onClick={autenticar} className="btn btn-outline-dark">Login</button>
                    <div className='text-center mt-1'>
                        {
                            msgTipo === 'erro' && <span>Verifique se o seu e-mail e senha estão corretos</span>
                        }
                    </div>
                    <div className='link-container'>
                        <Link to='newuser' className='link'>Ainda não possui uma conta? Crie uma</Link>
                        <a className='link' href="cadastro.html">Recuperar senha</a>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Login;