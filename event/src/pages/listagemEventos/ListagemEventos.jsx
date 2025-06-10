import { useEffect, useState } from "react";
import api from "../../services/Services";
import Modal from "../../components/modal/Modal.jsx";
import "./ListagemEventos.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Comentario from "../../assets/img/Comentario.svg";
import Toggle from "../../components/toggle/Toggle";
import Descricao from "../../assets/img/Descricao.svg";
import Swal from "sweetalert2";

const ListagemEventos = () => {
    const [listaEventos, setListaEventos] = useState([]);
    const [tipoModal, setTipoModel] = useState("");
    const [dadosModal, setDadosModel] = useState({});
    const [modalAberto, setModalAberto] = useState(false);
    const [filtroData, setFiltroData] = useState(["todos"]);
    const [usuarioid, setUsuarioid] = useState("BCAF4234-86E8-45C0-B105-24D3092C439B"); // teste, coloque ID real

    async function listarEventos() {
        try {
            const resposta = await api.get("Eventos");
            const todosOsEventos = resposta.data;

            const respostaPresenca = await api.get("PresencaEventos/ListarMinha/" + usuarioid);
            const minhasPresencas = respostaPresenca.data;

            const eventosComPresencas = todosOsEventos.map(evento => {
                const presenca = minhasPresencas.find(p => p.idEvento === evento.idEvento);
                return {
                    ...evento,
                    possuiPresenca: presenca?.situacao === true,
                    idPresenca: presenca?.idPresencaEvento || null
                };
            });

            setListaEventos(eventosComPresencas);

        } catch (error) {
            console.error("Erro ao listar eventos:", error);
        }
    }

    useEffect(() => {
        listarEventos();
    }, []);

    function abrirModal(tipo, dados) {
        setModalAberto(true);
        setTipoModel(tipo);
        setDadosModel(dados);
    }

    function fecharModal() {
        setModalAberto(false);
        setTipoModel("");
        setDadosModel({});
    }

    async function manipularPresenca(idEvento, presenca, idPresenca) {
        try {
            if (presenca && idPresenca !== "") {
                await api.put(`presencaEventos/${idPresenca}`, { situacao: false });
                Swal.fire("Removido!", "Sua presença foi removida.", "success");
            } else if (idPresenca !== "") {
                await api.put(`presencaEventos/${idPresenca}`, { situacao: true });
                Swal.fire("Confirmado!", "Sua presença foi confirmada.", "success");
            } else {
                await api.post("presencaEventos", { situacao: true, idUsuario: usuarioid, idEvento });
                Swal.fire("Confirmado!", "Sua presença foi confirmada.", "success");
            }

            listarEventos();
        } catch (error) {
            console.error("Erro ao atualizar presença:", error);
        }
    }

    function filtrarEventos() {
        const hoje = new Date();

        return listaEventos.filter(evento => {
            const dataEvento = new Date(evento.dataEvento);
            if (filtroData.includes("todos")) return true;
            if (filtroData.includes("futuros") && dataEvento > hoje) return true;
            if (filtroData.includes("passados") && dataEvento < hoje) return true;
            return false;
        });
    }

    return (
        <>
            <Header user="Aluno" botao_logar="none" />
            <main>
                <section className="layout_grid listagem_section">
                    <div className="titulo_listagem">
                        <h1>Eventos</h1>
                        <hr />
                    </div>
                    <select onChange={(e) => setFiltroData([e.target.value])}>
                        <option value="todos">Todos os eventos</option>
                        <option value="futuros">Somente futuros</option>
                        <option value="passados">Somente passados</option>
                    </select>

                    <div className="list">
                        <table>
                            <thead>
                                <tr className="list_tabela">
                                    <th>Título</th>
                                    <th>Data</th>
                                    <th>Tipo</th>
                                    <th>Descrição</th>
                                    <th>Comentários</th>
                                    <th>Participar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filtrarEventos().map((item) => (
                                    <tr key={item.idEvento} className="list_presenca">
                                        <td>{item.titulo}</td>
                                        <td>{new Date(item.dataEvento).toLocaleDateString()}</td>
                                        <td>{item.tipoEvento}</td>
                                        <td>
                                            <button className="icon" onClick={() => abrirModal("descricaoEvento", { descricao: item.descricao })}>
                                                <img src={Descricao} alt="Descrição" />
                                            </button>
                                        </td>
                                        <td>
                                            <button className="icon" onClick={() => abrirModal("comentarios", { idEvento: item.idEvento })}>
                                                <img src={Comentario} alt="Comentários" />
                                            </button>
                                        </td>
                                        <td data-cell="Presença">
                                            <Toggle
                                                ligado={item.possuiPresenca}
                                                onClick={() =>
                                                    manipularPresenca(item.idEvento, item.possuiPresenca, item.idPresenca)
                                                }
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>

            <Footer visibilidade="none" />
       
            {modalAberto && (
                <Modal
                    titulo={tipoModal === "descricaoEvento" ? "Descrição do evento" : "Comentário"}
                    tipoModel={tipoModal}
                    idEvento={dadosModal.idEvento}
                    descricao={dadosModal.descricao}
                    fecharModal={fecharModal}
                />
            )}
            <Footer />
        </>
    );
};
        
export default ListagemEventos;
