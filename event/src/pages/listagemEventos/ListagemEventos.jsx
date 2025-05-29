import { useEffect, useState } from "react";
import api from "../../services/Services";

import "./ListagemEventos.css"
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Comentario from "../../assets/img/Comentario.svg"
import Toggle from "../../components/toggle/Toggle";

const ListagemEventos = (props) => {
    const [listaEventos, setListaEventos] = useState([]);

    async function listarEventos() {
        try {
            const resposta = await api.get("Eventos");

            setListaEventos(resposta.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        listarEventos();
    }, [])

    return (
        <>
            <Header
                user="Aluno"
                botao_logar="none"
            />
            <main>
                <section className="layout_grid listagem_section">
                    <div className="titulo_listagem">
                        <h1>Eventos</h1>
                        <hr />
                    </div>

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
                                <th>Tipo Evento</th>
                                <th>Comentários</th>
                                <th>Participar</th>
                            </tr>

                            <tr className="list_presenca">
                                <td data-cell="Titulo">xxxxxxxx</td>

                                <td data-cell="Tipo Evento">xxxxxxxx</td>

                                <td data-cell="Comentario"><img src={Comentario} alt="Comentário" /></td>

                                <td data-cell="Presenca"><Toggle /></td>
                            </tr>
                        </table>
                    </div>
                </section>
            </main>
            <Footer
                visibilidade="none"
            />
        </>
    )
}

export default ListagemEventos;