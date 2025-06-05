import { useEffect, useState } from "react"
import imgDeletar from"../../assets/img/Excluir.svg";


const Modal = (props) => {
  const [comentarios, setComentarios] = useState([])
  const [novoComentario, setNovoComentario] =
async function listarComentarios() {
  try {
    await api.get(`comentariosEventos/ListarSomenteExibe?id=${props.idEvento}`);
    setComentarios(resposta.data)


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
    
  }

  async function deletarcomentario(idcomentario) {
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
