import React, {useState} from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar';

function Home() {
    return(
        <>
        <Navbar/>
        <section id='melhores' className='secao'>
            <h1 className='secao-titulo'>Melhores Whiskys</h1>
            <div className='cartao-container'>
            <div className='cartao'></div>
            <div className='cartao'></div>
            <div className='cartao'></div>
            <div className='cartao'></div>
            </div>
            </section>
            <section id='escoceses' className='secao'>
                <h1 className='secao-titulo'>Escoceses</h1>
                <div className='cartao-container'>
                <div className='cartao'></div>
                <div className='cartao'></div>
                <div className='cartao'></div>
                <div className='cartao'></div>
            </div>
            </section>
            <section id='irlandeses' className='secao'>
                <h1 className='secao-titulo'>Irlandeses</h1>
                <div className='cartao-container'>
                <div className='cartao'></div>
                <div className='cartao'></div>
                <div className='cartao'></div>
                <div className='cartao'></div>
            </div>
            </section>
            <section id='americanos' className='secao'>
                <h1 className='secao-titulo'>Americanos</h1>
                <div className='cartao-container'>
                <div className='cartao'></div>
                <div className='cartao'></div>
                <div className='cartao'></div>
                <div className='cartao'></div>
            </div>
            </section>
            <section id='japoneses' className='secao'>
                <h1 className='secao-titulo'>Japoneses</h1>
                <div className='cartao-container'>
                <div className='cartao'></div>
                <div className='cartao'></div>
                <div className='cartao'></div>
                <div className='cartao'></div>
            </div>
            </section>
            <section id='brasileiros' className='secao'>
                <h1 className='secao-titulo'>Brasileiros</h1>
                <div className='cartao-container'>
                <div className='cartao'></div>
                <div className='cartao'></div>
                <div className='cartao'></div>
                <div className='cartao'></div>
            </div>
            </section>
            <section id='canadenses' className='secao'>
                <h1 className='secao-titulo'>Canadenses</h1>
                <div className='cartao-container'>
                <div className='cartao'></div>
                <div className='cartao'></div>
                <div className='cartao'></div>
                <div className='cartao'></div>
            </div>
            </section>
        </>
    )
}

export default Home;