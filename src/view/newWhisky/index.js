import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './newWhisky.css';
import { Link, Redirect } from 'react-router-dom';
import firebase from '../../config/firebase';
import Navbar from '../../components/navbar';

function NewWhisky() {
    const [nomeImagem, setNomeImagem] = useState();
    const [carregando, setCarregando] = useState(false);
    const [nome, setNome] = useState();
    const [destilaria, setDestilaria]  = useState();
    const [localidade, setLocalidade] = useState();
    const [descricao, setDescricao] = useState();
    const [corpo, setCorpo] = useState();
    const [nota, setNota] = useState();
    const [dulcor, setDulcor] = useState();
    const [intensidade, setIntensidade] = useState();
    const [turfa, setTurfa] = useState();
    const [imagem, setImagem] = useState();
    const [msg, setMsg] = useState();

    useEffect(() => {
        if(imagem) {
            setNomeImagem(imagem?.name);
        }
    }, [imagem]);

    const storage = firebase.storage();
    const db = firebase.firestore();

    const usuarioEmail = useSelector(state => state.usuarioEmail);

    function cadastrar() {
        if(!carregando) {
            setCarregando(true);
            if(!nome || !destilaria || !localidade || !descricao || !corpo || !dulcor || !intensidade || !turfa || !imagem) {
                setCarregando(false);
                alert(nome + destilaria + localidade + descricao + corpo + dulcor + intensidade + turfa + imagem);
                setMsg('Verifique se você preencheu todos os campos');
            } else {
                const imagemName = nome.replace(/^\s+|\s+$|\s+(?=\s)/g, "_") + Math.floor(Math.random() * 1001);
                storage.ref(`imagens/${imagemName}`).put(imagem).then(() => {
                    db.collection('whiskys').add({
                        nome: nome,
                        destilaria: destilaria,
                        localidade: localidade,
                        descricao: descricao,
                        corpo: corpo,
                        dulcor: dulcor,
                        intensidade: intensidade,
                        turfa: turfa,
                        imagem: imagemName,
                        criacao: new Date(),
                        usuario: usuarioEmail,
                        nota: nota,
                    }).then( () => {
                        setMsg('Cadastro concluido');
                        setCarregando(false);
                    }).catch(() => {
                        setMsg('Verifique se você preencheu todos os campos');
                        setCarregando(false);
                    })
                }).catch(() => {
                    setMsg('Escolha uma imagem valida');
                    setCarregando(false);
                })
            }
        }
    } 

    return(
        <>
            <Navbar />
            <section className="secao">
                <h3 className="mx-auto fornt-weightbold margin-left-10">Novo Whisky</h3>
                <p class="text-muted margin-left-10">Cadastre um novo whisky caso não tenha encontrado no site.</p>
                <div className="col-12">
                    <div className="row">
                        <form>
                            <div className="row">
                                <div className='input-container col'>
                                    <div className="form-floating">
                                        <input type="text" onChange={(e) => setNome(e.target.value)} className="form-control" id="floatingInput" placeholder="Nome" />
                                        <label for="floatingInput">Nome</label>
                                    </div>
                                </div>
                                <div className='input-container col'>
                                    <div className="form-floating">
                                        <input type="text" onChange={(e) => setDestilaria(e.target.value)} className="form-control" id="floatingInput" placeholder="Destilaria" />
                                        <label for="floatingInput">Destilaria</label>
                                    </div>
                                </div>
                                <div className='input-container col'>
                                    <div class="form-floating">
                                        <select class="form-select" onChange={(e) => setLocalidade(e.target.value)} id="floatingSelectCorpo" aria-label="Floating label select">
                                            <option value="Escoces" selected>Escoces</option>
                                            <option value="Irlandes">Irlandes</option>
                                            <option value="Americano">Americano</option>
                                            <option value="Japones">Japones</option>
                                            <option value="Brasileiro">Brasileiro</option>
                                            <option value="Canadense">Canadense</option>
                                        </select>
                                        <label for="floatingSelectCorpo">Localidade</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-floating row mx-2">
                                <textarea className="form-control height-100px" onChange={(e) => setDescricao(e.target.value)} rows="4" placeholder="Descreva o whisky" id="floatingTextareaDescricao"></textarea>
                                <label for="floatingTextareaDescricao">Descrição</label>
                            </div>
                            <div className='input-container row'>
                                <div class="form-floating col pl-0">
                                    <select class="form-select" id="floatingSelectCorpo" onChange={(e) => setCorpo(e.target.value)} aria-label="Floating label select">
                                        <option value="1" selected>1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                    <label for="floatingSelectCorpo">Corpo</label>
                                </div>
                                <div class="form-floating col">
                                    <select class="form-select" id="floatingSelectTurfa" onChange={(e) => setTurfa(e.target.value)} aria-label="Floating label select">
                                        <option value="1" selected>1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                    <label for="floatingSelectTurfa" className="margin-left-12">Turfa</label>
                                </div>
                                <div class="form-floating col">
                                    <select class="form-select" id="floatingSelectDulcor" onChange={(e) => setDulcor(e.target.value)} aria-label="Floating label select">
                                        <option value="1" selected>1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                    <label for="floatingSelectDulcor" className="margin-left-12">Dulçor</label>
                                </div>
                                <div class="form-floating col pr-0">
                                    <select class="form-select" id="floatingSelectIntensidade" onChange={(e) => setIntensidade(e.target.value)} aria-label="Floating label select">
                                        <option value="1" selected>1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                    <label for="floatingSelectIntensidade" className="margin-left-12">Intensidade</label>
                                </div>
                                <div class="form-floating col pr-0">
                                    <select class="form-select" id="floatingSelectIntensidade" onChange={(e) => setNota(e.target.value)} aria-label="Floating label select">
                                        <option value="1" selected>1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                    <label for="floatingSelectIntensidade" className="margin-left-12">Nota</label>
                                </div>
                            
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <label for="upload" className="fileUpload btn btn-primary"> {nomeImagem !== undefined ? nomeImagem : "Escolha uma foto da garrafa" }</label>
                                    <input type="file" onChange={(e) => setImagem(e.target.files[0])} name="photo" id="upload" />
                                </div>
                                <button type="button" onClick={cadastrar} className="btn btn-outline-dark col">
                                <span className='sr-only'>Cadastrar</span>
                                {
                                    carregando ? <span className="spinner-border spinner-border-sm mx-2" role="status" aria-hidden="true"></span> : null
                                }
                                </button>
                            </div>
                            <div className='text-center mt-1'>
                                {
                                    <span>{msg}</span>
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            {   useSelector(state => state.usuarioLogado) === 0 ? <Redirect to='/' /> : null  }
        </>
    )
}

export default NewWhisky;