import React, {useState} from 'react';
import firebase from '../../config/firebase';
import arrowleft from '../../img/arrow-left.svg';
import { Link, Redirect } from 'react-router-dom';
import 'firebase/auth';
import './newUser.css';

function NewUser() {

    const [email, setEmail] = useState();
    const [confirmacaoEmail, setConfirmacaoEmail] = useState();
    const [senha, setSenha] = useState();
    const [nome, setNome] = useState();
    const [sobrenome, setSobrenome] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const [disabled, setDisabled] = useState(false);
    const [carregando, setCarregando] = useState();
    const [msg, setMsg] = useState();

    function verificaEmail(e) {
        setConfirmacaoEmail(e.target.value);

        if(email !== e.target.value) {
            setMsgTipo('erro');
            setMsg('Seu email está diferente da confirmação!');
        } else {
            setMsgTipo(null);
            setMsg(null);
        }
    }

    function cadastrar() {
        setCarregando(true);
        setDisabled(true);
        setMsgTipo(null);

        if(!email || !senha || !confirmacaoEmail || !nome || !sobrenome) {
            setMsgTipo('erro');
            setMsg('Você não preencheu todos os campos!');
        } else {
            firebase.auth().createUserWithEmailAndPassword(email, senha).then( resultado => {
                setMsgTipo('ok');
                setCarregando(false);
                setDisabled(false);
            }).catch(erro => {
                setMsgTipo('erro');
                setCarregando(false);
                setDisabled(false);
                switch(erro.message) {
                    case 'Password should be at least 6 characters':
                        setMsg('A senha deve ter pelo menos 6 caracteres');
                        break;
                    case 'The email address is already in use by another account.':
                        setMsg('Este email já está sendo usado por outra conta.');
                        break;
                    case 'The email address is badly formatted.':
                        setMsg('o formato do email é inválido.');
                        break;
                    default:
                        setMsg('Não foi possível cadastrar. Por favor, tente mais tarde');
                        break;
                }
            })
        }
    }

    return (
        <section id="cadastro">
            <div className="cadastro-container">
                <Link to="/"><img className="icone" src={arrowleft} alt="voltar"/></Link>
                <div className="text-container">
                    <h1>Cadastro</h1>
                    <p>Por favor preencha os campos abaixo</p>
                </div>
                <form>
                <div className="input-container">
                    <div className="form-floating">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="John"
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <label for="floatingInput">Nome</label>
                    </div>
                </div>
                <div className="input-container">
                    <div className="form-floating">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Wick"
                        onChange={(e) => setSobrenome(e.target.value)}
                    />
                    <label for="floatingInput">Sobrenome</label>
                    </div>
                </div>
                <div className="input-container">
                    <div className="form-floating">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label for="floatingInput">Email</label>
                    </div>
                </div>
                <div className="input-container">
                    <div className="form-floating">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        onChange={(e) => verificaEmail(e)}
                    />
                    <label for="floatingInput">Confirme seu Email</label>
                    </div>
                </div>
                <div className="input-container">
                    <div className="form-floating">
                    <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        onChange={(e) => setSenha(e.target.value)}
                    />
                    <label for="floatingPassword">Senha</label>
                    </div>
                </div>
                <button type="button" onClick={() => cadastrar()} disabled={disabled} className="btn btn-outline-dark">
                    <span className='sr-only'>Cadastro</span>
                    {
                        carregando ? <span className="spinner-border spinner-border-sm mx-2" role="status" aria-hidden="true"></span> : null
                    }
                </button>
                <div className='text-center mt-1'>
                        {
                            msgTipo === 'erro' && <span>{msg}</span>
                        }
                    </div>
                </form>
            </div>
            {
                msgTipo === 'ok' ? <Redirect to='/login' /> : null
            }
        </section>
    )
}

export default NewUser;