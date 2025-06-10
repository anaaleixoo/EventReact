import { useEffect, useState } from "react"
import imgDeletar from"../../assets/img/Excluir.svg";

import "./Modal.css";

import api from "../../services/Services";


const Modal = (props) => {

  const [comentarios, setComentarios] = useState([])

  const [novoComentario, setNovoComentario] = useState("");

  const [usuarioId, setUsuarioId] = useState("817B69EB-ECFE-4E39-B872-F2871AF79756");

async function listarComentarios() {
  try {
  const resposta = await api.get(`comentariosEventos/ListarSomenteExibe?id=${props.idEvento}`); 

    setComentarios(resposta.data);

    console.log(resposta.data);


  } catch (error) {
    console.log(error);
  }

  
}
useEffect(() => {
  listarComentarios
}, [])


async function cadastrarComentario() {
  try {
    await api.post("ComentariosEventos",(
      idUsuario = usuarioid,
      idEvento = props.idEvento,
      descricao = comentarios
    ));
  } catch (error) {
    console.error(error);
  }

  async function deletarcomentario(idComentario) {
    try{
        await api.delete(`ComentarioEventos/${idComentario}`);
    } catch (error) {
        console.log(error)
    }
    
  }
  
}

  return (<>
    <div className="model-overlay" onClick={props.fecharModal}></div>
    <div className="model">
      <h1>{props.titulo}</h1>
    <div className="model_conteudo">
      {props.TipoModel === "descricaoEvento" ? (
        <p>{props.descricao}</p>
      ) : (
        <>
        {comentarios.map((item) => (
          <div key={item.idComentarioEvento}>
            <strong> {item.usuario.nomeUsuario}
            </strong>
            <img src={imgDeletar} alt="Deletar"/>
            onClick={() => deletarcomentario(item.idcomentario)}
            <p>{item.descricao}</p>
            <hr />
          </div>
        )
        )}
        <div>
          <input type="text"
          placeholder="escreva seu Comentario..."
          value={novoComentario}
          onChange={(e)=> setNovoComentario(e.target.value)}
           />
           <button onClick={() => cadastrarComentario(novoComentario)}>
            Cadastrar
           </button>
        </div>
        </>
      )}
    </div>
    </div>
  
  </>
  )
}

export default Modal
