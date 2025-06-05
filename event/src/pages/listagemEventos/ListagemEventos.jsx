import { useEffect, useState } from "react";
import api from "../../services/Services";
import Modal from "../../components/modal/Modal.jsx"
import "./ListagemEventos.css"
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Comentario from "../../assets/img/Comentario.svg"
import Toggle from "../../components/toggle/Toggle";
import Descricao from "../../assets/img/Descricao.svg"
import Swal from "sweetalert2";

const ListagemEventos = (props) => {
    const [listaEventos, setListaEventos] = useState([]);
    const [tipoModal, setTipoModel] = useState("");
    const [dadosModal, setDadosModel] = useState([]);
    const [modalAberto, setModalAberto] = useState(false);
    const {filtroData, setFiltroData} = useState(["todos"])
}
    const [usuarioid, setUsuarioid] = useState ("")
    async function listarEventos() {  
        try {
            const resposta = await api.get("Eventos");
            const todosOsEventos = resposta.data;

            const respostaPresenca = await api.get("PresencaEventos/ListarMinha/"+usuarioD)
            const minhasPresencas = respostaPresenca.data;
            const eventosComPresencas = todosOsEventos.map((atualEvento) => {
                const presenca = minhasPresencas.find(p => p.idEvento
                    === atualEvento.idEvento);

                    return(
                        atualEvento,
                        possuiPresenca = presenca?.situacao === true,
                        idPresenca = presenca?.idPresencaEvento || null
                    )

            })
        

            setListaEventos(resposta.data);

        } catch (error) {
            console.log(`informacoes de todos os eventos`);
            console.log()
            console.log(`informacoes de eventos com presenca`);
            console.log()
            console.log(`informacoes de todos os eventos com presenca`);
            console.log(eventosComPresencas);
        }
    


    useEffect(() => 
        function abrirModal(tipo, dados){
         setModalAberto(true)   
         tipoModal(tipo)
         dadosModal(dados)

        })
          useEffect(() => {
        function fecharModal(tipo, dados){
         setModalAberto(false);   
         tipoModal({});
         dadosModal("");

        }

        async function manipularPresenca(idEvento, presenca, idPresenca) {
            try {
                if(presenca && idPresenca !=""){
                    await api.put(`presencaEventos/${idPresenca}`),
                    {situacao: false};
                    Swal.fire(`removido!`, `Sua presenca foi removida.`, `Sucess`);

                }else if (idPresenca != ""){
                     await api.put(`presencaEventos/${idPresenca}`),
                    {situacao: true};
                    Swal.fire(`Confirmado!`, `Sua presenca foi comfirmada.`, `Sucess`);


                }else{
                await api.post("presencaEventos",{situacao: true, idUsuario: usuarioid, idEvento: idEvento});
                 Swal.fire(`Confirmado!`, `Sua presenca foi comfirmada.`, `Sucess`);

                }
                
            } catch (error) {
                
            }
            function filtrarEventos(){
                const hoje = new Date();

                return listaEventos.filter(evento => {
                    const dataEvento = new Date(evento.dataEvento);
                    if (filtroData.includes("todos")) return true;
                    if (filtroData.includes("futuros") && dataEvento > hoje)
                        return true;
                    if (filtroData.includes("passados") && dataEvento > hoje)
                        return true;

                    return false;
                });

            }
            
        }

        listarEventos();
    }, [])

    return (
        <>
            <Header
                user="Aluno"
                botao_logar="none"a
            />
            <main>
                <section className="layout_grid listagem_section">
                    <div className="titulo_listagem">
                        <h1>Eventos</h1>
                        <hr />
                    </div>
                         <select onChange= {(e) => setFiltroData([e.target.value])}>
                        <option value="todos" selected>Todos os eventos</option> 
                        <option value="Futuros">Somente futuros</option>
                        <option value="passados">Somente passados</option>
                    </select>
                    <div className="listagem_eventos">
                        <select name="eventos">
                            <option value="" disabled selected>Todos os Eventos</option>
                            <option value="">xxxxxxxx</option>
                        </select>
                    </div>

                    <div className="list">
                        <table>
                            <tr className="list_tabela">
                                <th>Titulo</th>
                                <th>Data do Evento</th>
                                <th>Tipo Evento</th>
                                <th>Descrição</th>
                                <th>Comentários</th>
                                <th>Participar</th>
                            </tr>
                            
                            

                            <tr className="list_presenca">
                                <td>buffet do buffet</td>
                                <td>07/06/2025</td>
                                <td>trabalho</td>
                                <td>
                                    <button className="icon" onClick={() => abrirModal("descricaoEvento", 
                                        item.Descricao)}>
                                        <img src={Descricao} alt="" />
                                    </button>
                                </td>

                                    <td>
                                    <button className="icon" onClick={() => abrirModal("comentarios", 
                                        {idEvento: item.idEvento})}>
                                        <img src={Comentario} alt="" />
                                    </button>
                                </td>
                                
                                
                                <td data-cell="Presenca"><Toggle /></td>

                            </tr>
                        </table>
                    </div>
                </section>
            </main>
            <Footer visibilidade="none"
            />
            {modalAberto && (
            <Modal
             titulo = {tipoModel == "descricaoEvento" ? "Descrição do evento" : "Comentarios"}
             tipoModal = {tipoModal}
             idEvento = {dadosModal.idEvento}
             descricao = {dadosModal.descricao}
             fecharModal = {fecharModal}
             />
            )}
        </>
            
            
    )
    }

export default ListagemEventos;