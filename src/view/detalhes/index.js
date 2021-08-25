import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import firebase from '../../config/firebase';
import { useSelector } from 'react-redux';
import estrelaVazia from '../../img/star_border_black_24dp.svg';
import estrelaCheia from '../../img/star_black_24dp.svg';
import Pin from '../../img/pin.svg';
import './detalhes.css';
import Navbar from '../../components/navbar';
import DetalheCard from '../../components/detalheCard';

function DefineEstrela(nota, limite) {
    if(nota >= limite) {
        return estrelaCheia;
    } else if(nota < limite) {
        return estrelaVazia;
    } /* else if(nota < limite) {
        return estrelaVazia
    } */
}

function Detalhes({match}) {

    const [whisky, setWhisky] = useState();
    const [imagem, setImagem] = useState();


    useEffect(() => {
        firebase.firestore().collection('whiskys').doc(match.params.idWhisky).get().then( resultado => {
            setWhisky(resultado.data());
            firebase.storage().ref(`imagens/${resultado.data().imagem}`).getDownloadURL().then( url => {
                setImagem(url);
            })
        })
    }, []);

    return(
        <>
        <Navbar />
            <section id='container'>
                <div id='imagem'>
                    <img src={imagem} alt='Imagem da garrafa do whisky' />
                </div>
                <section id='infos'>
                    <h1>{whisky?.nome}</h1>
                    <DetalheCard texto={`Destilaria: ${whisky?.destilaria}`} />
                    <DetalheCard texto={whisky?.descricao} />
                    <div className='localizacao'>
                        <img src={Pin} className='icone-card' alt="Icone localidade"/>
                        <p className="card-text">{whisky?.localidade}</p>
                    </div>
                    <div className="estrelas">
                        <img className='icone-card' src={DefineEstrela(whisky?.nota, 1)} alt="icone-star" />
                        <img className='icone-card' src={DefineEstrela(whisky?.nota, 2)} alt="icone-star" />
                        <img className='icone-card' src={DefineEstrela(whisky?.nota, 3)} alt="icone-star" />
                        <img className='icone-card' src={DefineEstrela(whisky?.nota, 4)} alt="icone-star" />
                        <img className='icone-card' src={DefineEstrela(whisky?.nota, 5)} alt="icone-star" />
                    </div>
                    <div id='notas-degustacao'>
                    <div className='nota-container'>
                        <p>Corpo</p>
                        <div className={`nota-circulo nota-${whisky?.corpo}`}>
                        <p className='nota'>{whisky?.corpo}</p>
                        </div>
                    </div>
                    <div className='nota-container'>
                        <p>Turfa</p>
                        <div className={`nota-circulo nota-${whisky?.turfa}`}>
                        <p className='nota'>{whisky?.turfa}</p>
                        </div>
                    </div>
                    <div className='nota-container'>
                        <p>Dulçor</p>
                        <div className={`nota-circulo nota-${whisky?.dulcor}`}>
                        <p className='nota'>{whisky?.dulcor}</p>
                        </div>
                    </div>
                    <div className='nota-container'>
                        <p>Intensidade</p>
                        <div className={`nota-circulo nota-${whisky?.intensidade}`}>
                        <p className='nota'>{whisky?.intensidade}</p>
                        </div>
                    </div>
                    </div>
                </section>
                {/* <section id='review'>
                <div className='review-header'>
                    <div className='review-titulo'>
                    <h1>Reviews</h1>
                    </div>
                    <div id='review-botao' className='d-grid gap-2'>
                    <a href="./opniao.html" className="btn btn-secondary btn-lg" role="button" aria-disabled="true">Dar Sua Opnião</a>
                    </div>
                </div>
                <div className='review-janela'>
                <div className='review-conteudo'>
                </div>
                <div className='review-conteudo'>
                </div>
                <div className='review-conteudo'>
                </div>
                <div className='review-conteudo'>
                </div>
                <div className='review-conteudo'>
                </div>
                </section> */}
            </section>
        </>
    )
}

export default Detalhes;