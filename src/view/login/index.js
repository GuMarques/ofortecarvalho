import React from 'react';
import './login.css';

function login() {
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
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email</label>
                        </div>
                    </div>
                    <div className='input-container'>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Senha</label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-outline-dark">Login</button>
                    <div className='text-center mt-1'>
                    <span>Verifique se o seu e-mail e senha estão corretos</span>
                    </div>
                    <div className='link-container'>
                        <a className='link' href="cadastro.html">Ainda não possui uma conta? Crie uma</a>
                        <a className='link' href="cadastro.html">Recuperar senha</a>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default login;