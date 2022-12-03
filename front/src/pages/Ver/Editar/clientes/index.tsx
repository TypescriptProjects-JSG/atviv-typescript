import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import NavBar_ from '../../../../component/barraNavegacao';
import { useParams } from 'react-router-dom'
import Axios from "axios";
import { useState, useEffect } from "react";

function EditarCliente() {
    const navigate = useNavigate();
    var { id } = useParams();
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
        Axios.post("http://localhost:3001/editar/cliente", {
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
            },
            id: id
        }).then((res)=>{
          console.log(res)
        })    
    }

    const [list, setList] = useState([]);
    useEffect(() => {
      Axios.get(`http://localhost:3001/ver/clientes`).then((resp) => {
        setList(resp.data);
      });
    }, [])

    var Nome = new String
    for(let k=0; list.length > k; ++k){
        var pessoa = list[k]
        if(pessoa[0] == id){
            Nome = pessoa
            break 
        }  
    }
    
    return (
        <section>
            <header>
                <NavBar_ />
            </header>
            <main>
                <h1><strong>Editar Cliente:</strong> {Nome[1]}</h1>
                <div className="forms">
                    <form>
                        <div className="field">
                            <label>Nome Completo:</label>
                            <input type="text" placeholder={Nome[1]} onChange={(e) => setNome(e.target.value)}/>
                        </div>
                        <div className="field">
                            <label>Nome social:</label>
                            <input type="text" placeholder={Nome[2]} onChange={(e) => setNomeSocial(e.target.value)}/>
                        </div>
                        <div className="campo-duplo">
                            <div className="field esquerda">
                                <label>Cidade:</label>
                                <input type="text" placeholder={Nome[4]} onChange={(e) => setCidade(e.target.value)}/>
                            </div>
                            <div className="field direita">
                                <label>Estado:</label>
                                <input type="text" placeholder={Nome[3]} onChange={(e) => setEstado(e.target.value)}/>
                            </div>
                        </div>
                        <div className="campo-duplo">
                            <div className="field esquerda">
                                <label>Rua:</label>
                                <input type="text" placeholder={Nome[6]} onChange={(e) => setRua(e.target.value)}/>
                            </div>
                            <div className="field direita">
                                <label>Bairro:</label>
                                <input type="text" placeholder={Nome[5]} onChange={(e) => setBairro(e.target.value)}/>
                            </div>
                        </div>
                        <div className="campo-duplo">
                            <div className="field esquerda">
                                <label>Número:</label>
                                <input type="text" placeholder={Nome[7]} onChange={(e) => setNumero(e.target.value)}/>
                            </div>
                            <div className="field direita">
                                <label>Código postal:</label>
                                <input type="text" placeholder={Nome[8]} onChange={(e) => setCodigoPostal(e.target.value)}/>
                            </div>
                        </div>
                        <div className="field">
                            <label>Mais informações:</label>
                            <input type="text" placeholder={Nome[9]} onChange={(e) => setInfo(e.target.value)}/>
                        </div>
                        <div className="campo-button">
                                <div className="button-l">
                                    <Button className="submit" variant="outline-dark" onClick={() => navigate(-1)}>Voltar</Button>{' '}
                                </div>
                                <div>
                                    <Button className="submit btn-resp" variant="outline-dark" type='submit' onClick={() => handleSubmit()}>Atualizar</Button>{' '}
                                </div>
                            </div>
                    </form>
                </div>
            </main>
        </section>
    );
}

export default EditarCliente;