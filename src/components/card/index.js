import React, {useState} from 'react';
import './card.css';
import { Link } from 'react-router-dom';

function Card() {
    return(
        <div class="card">
            <img src="../src/imagens/oldparr.png" class="card-img-top" alt="Old Parr" />
            <div class="card-body">
                <h5 class="card-title">Old Parr Scotch</h5>
                <div class='localizacao'>
                    <img src="./src/icones/pin.svg" class='icone'/>
                    <p class="card-text">Escocês</p>
                </div>
                <div class="estrelas">
                    <img class='icone' src="./src/icones/star_black_24dp.svg" />
                    <img class='icone' src="./src/icones/star_black_24dp.svg" />
                    <img class='icone' src="./src/icones/star_black_24dp.svg" />
                    <img class='icone' src="./src/icones/star_half_black_24dp.svg" />
                    <img class='icone' src="./src/icones/star_border_black_24dp.svg" />
                </div>
                <a href="../detalhes.html" class="btn btn-outline-dark">Detalhes</a>
            </div>
        </div>
    )
}

export default Card;