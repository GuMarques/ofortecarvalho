import React, {useState, useEffect} from 'react';
import './card.css';
import { Link } from 'react-router-dom';
import estrelaVazia from '../../img/star_border_black_24dp.svg';
import estrelaCheia from '../../img/star_black_24dp.svg';
import Pin from '../../img/pin.svg';
import firebase from '../../config/firebase';


function DefineEstrela(nota, limite) {
    if(nota >= limite) {
        return estrelaCheia;
    } else if(nota <= limite) {
        return estrelaVazia;
    }
}

function Card( { key, id, nome, localidade, nota, imagem } ) {

    const [urlImagem, setUrlImagem] = useState();

    useEffect(() => {
        firebase.storage().ref(`imagens/${imagem}`).getDownloadURL().then( url => {
            setUrlImagem(url);
        })
    },[]);

    return(
        <div class="card">
            <img id="image-card" src={imagem === undefined ? "https://via.placeholder.com/150x200" : urlImagem} class="card-img-top" alt="Imagem do Whisky" />
            <div class="card-body">
                <h5 class="card-title">{nome}</h5>
                <div class='localizacao'>
                    <img src={Pin} class='icone-card' alt="icone-pin"/>
                    <p class="card-text">{localidade}</p>
                </div>
                <div class="estrelas">
                    <img class='icone-card' src={DefineEstrela(nota, 1)} alt="icone-star" />
                    <img class='icone-card' src={DefineEstrela(nota, 2)} alt="icone-star" />
                    <img class='icone-card' src={DefineEstrela(nota, 3)} alt="icone-star" />
                    <img class='icone-card' src={DefineEstrela(nota, 4)} alt="icone-star" />
                    <img class='icone-card' src={DefineEstrela(nota, 5)} alt="icone-star" />
                </div>
                <Link to={`/detalhes/${id}`} class="btn btn-outline-dark">Detalhes</Link>
            </div>
        </div>
    )
}

export default Card;