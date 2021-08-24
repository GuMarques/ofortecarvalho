import React, {useState} from 'react';
import './navbar.css';
import logo from '../../img/logo.png';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Navbar() {

    const dispatch = useDispatch();

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
      
          document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
          });
        });
      });
      

    return(
        <div className="container">
            <div className="cabecalho">
                <div className="cabecalho-container">
                <div className="cabecalho-esquerda">
                    <div className="logo">
                    <Link to="/">
                            <img src={logo} alt="logo"/>
                    </Link>
                    </div>
                    {/* <!-- <form className="pesquisa">
                    <input
                        type="search"
                        id="pesquisa"
                        name="pesquisa"
                        placeholder="Pesquisar whisky"
                    />
                    </form> --> */}
                </div>
                <div className="cabecalho-direita">
                    {useSelector(state => state.usuarioLogado) === 0 ? 
                        <>
                            <Link to="/login" className="btn btn-outline-dark btn-sm">Login</Link>
                            <Link to="/newuser" className="btn btn-outline-dark btn-sm">Cadastro</Link>
                        </>
                        : 
                            <Link onClick={() => dispatch({type: 'LOGOUT'})} className="btn btn-outline-dark btn-sm">Sair</Link>
                    }
                    
                    {/* <!-- <button>Login</button>
                    <button>Cadastro</button> --> */}
                </div>
                </div>
                <div className="menu-container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a
                            className="nav-link active"
                            aria-current="page"
                            id="es"
                            href="../index.html#escoceses"
                            >
                                Escoceses
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                            className="nav-link active"
                            aria-current="page"
                            href="../index.html#irlandeses"
                            >Irlandeses</a
                            >
                        </li>
                        <li className="nav-item">
                            <a
                            className="nav-link active"
                            aria-current="page"
                            href="../index.html#americanos"
                            >
                                Americanos
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                            className="nav-link active"
                            aria-current="page"
                            href="../index.html#japoneses"
                            >
                                Japoneses
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                            className="nav-link active"
                            aria-current="page"
                            href="../index.html#brasileiros"
                            >
                                Brasileiros
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                            className="nav-link active"
                            aria-current="page"
                            href="../index.html#canadenses"
                            >
                                Canadenses
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                            className="nav-link active"
                            aria-current="page"
                            href="../sobre.html"
                            >
                                Sobre
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>
                </div>
            </div>
            </div>
    )
}

export default Navbar;