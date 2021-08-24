import React, {useState} from 'react';
import './lostpassword.css';
import arrowleft from '../../img/arrow-left.svg';
import { Link, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

import firebase from '../../config/firebase';
import 'firebase/auth';

function LostPassword() {

    const [carregando, setCarregando] = useState(false);
    const [email, setEmail] = useState();
    const [msg, setMsg] = useState();

    function recuperar() {
        setCarregando(true);
        if(!email) {
            setMsg('Verifique se você digitou o email está correto');
            setCarregando(false);
        } else {
            firebase.auth().sendPasswordResetEmail(email).then( resultado => {
                setMsg('Um email para redefinir a sua senha foi enviado para a sua caixa de entrada');
                setCarregando(false);
            }).catch( erro => {
                setMsg('Verifique se você digitou o email está correto');
                setCarregando(false);
            })
        }
    }

    return(
        <section id='login'>
            <div className='login-container'>
                <Link to="/login"><img className='icone' src={arrowleft} alt='voltar' /></Link>
                <div className='text-container'>
                    <h1>Recuperação de senha</h1>
                    <p>Por favor preencha os campos abaixo</p>
                </div>
                <form>
                    <div className='input-container'>
                        <div className="form-floating">
                            <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email</label>
                        </div>
                    </div>
                    {/* <div className='input-container'>
                        <div className="form-floating">
                            <input type="password" onChange={(e) => setSenha(e.target.value)} className="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Senha</label>
                        </div>
                    </div> */}
                    <button type="button" onClick={() => recuperar} className="btn btn-outline-dark">
                    <span className='sr-only'>Recuperar Senha</span>
                    {
                        carregando ? <span className="spinner-border spinner-border-sm mx-2" role="status" aria-hidden="true"></span> : null
                    }
                    </button>
                    <div className='text-center mt-1'>
                        {
                            <span>{msg}</span>
                        }
                    </div>
                    {/* <div className='link-container'>
                        <Link to='newuser' className='link'>Ainda não possui uma conta? Crie uma</Link>
                        <a className='link' href="cadastro.html">Recuperar senha</a>
                    </div> */}
                </form>
            </div>
        {   useSelector(state => state.usuarioLogado) > 0 ? <Redirect to='/' /> : null  }
        </section>
    )
}


export default LostPassword;