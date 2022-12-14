import { Button } from 'react-bootstrap';
import NavBar_ from '../../../component/barraNavegacao'
import '../styles.css'
import React, { useState } from "react";
import Axios from "axios";
import { toast } from 'react-toastify';

function CadastrarClientes() {
    const [nome, setNome] = useState('');
    const [nome_social, setNomeSocial] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [bairro, setBairro] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [codigoPostal, setCodigoPostal] = useState('');
    const [infos, setInfo] = useState('');

    function handleSubmit() {
        Axios.post("http://localhost:3001/cadastro/cliente", {
          nome: nome,
          nome_social: nome_social,
          endereco: {
            estado: estado,
            cidade: cidade,
            bairro: bairro,
            rua: rua,
            numero: numero,
            codigoPostal: codigoPostal,
            infos: infos
          }
        }).then((res)=>{
          console.log(res)
        })    
    }

    return (
        <section>
            <header>
                <NavBar_ />
            </header>
            <main>
                <h1 className='margin-titulo'><strong>Cadastro de Clientes</strong></h1>
                <div className="forms">
                    <form>
                        <div className="field">
                            <label>Nome Completo:</label>
                            <input type="text" onChange={(e) => setNome(e.target.value)}/>
                        </div>
                        <div className="field">
                            <label>Nome social:</label>
                            <input type="text" onChange={(e) => setNomeSocial(e.target.value)}/>
                        </div>
                        <div className="campo-duplo">
                            <div className="field esquerda">
                                <label>Cidade:</label>
                                <input type="text" onChange={(e) => setCidade(e.target.value)}/>
                            </div>
                            <div className="field direita">
                                <label>Estado:</label>
                                <input type="text" onChange={(e) => setEstado(e.target.value)}/>
                            </div>
                        </div>
                        <div className="campo-duplo">
                            <div className="field esquerda">
                                <label>Rua:</label>
                                <input type="text" onChange={(e) => setRua(e.target.value)}/>
                            </div>
                            <div className="field direita">
                                <label>Bairro:</label>
                                <input type="text" onChange={(e) => setBairro(e.target.value)}/>
                            </div>
                        </div>
                        <div className="campo-duplo">
                            <div className="field esquerda">
                                <label>N??mero:</label>
                                <input type="text" onChange={(e) => setNumero(e.target.value)}/>
                            </div>
                            <div className="field direita">
                                <label>C??digo postal:</label>
                                <input type="text" onChange={(e) => setCodigoPostal(e.target.value)}/>
                            </div>
                        </div>
                        <div className="field">
                            <label>Mais informa????es:</label>
                            <input type="text" onChange={(e) => setInfo(e.target.value)}/>
                        </div>

                        <Button className="submit" variant="outline-dark" type='submit' onClick={() => handleSubmit()}>Cadastrar</Button>{' '}
                    </form>
                </div>
            </main>
        </section>
    );
}

export default CadastrarClientes;