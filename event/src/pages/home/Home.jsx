import "./Home.css"
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer"
import Banner from "../../assets/img/Banner.svg"
import Mapa from "../../assets/img/Mapa.svg"

const Home = () => {
    return (
        <>
            <Header
                visibilidade="none" />
            <main>
                <section className="home_section">
                    <div className="pagina_home">
                        <img src={Banner} alt="" />
                        <hr />
                        <p>Área de eventos da Escola de Informática</p>
                    </div>

                    <div className="proximos_eventos">
                        <div className="titulo">
                            <h1>Próximos Eventos</h1>
                            <hr />
                        </div>

                        <div className="lista_eventos">
                            <div className="item">
                                <h1>Titulo do Evento</h1>

                                <p>Breve descrição do evento, pode ser um paragrafo pequeno</p>

                                <button>Conectar</button>
                            </div>

                            <div className="item">
                                <h1>Titulo do Evento</h1>

                                <p>Breve descrição do evento, pode ser um paragrafo pequeno</p>

                                <button>Conectar</button>
                            </div>

                            <div className="item">
                                <h1>Titulo do Evento</h1>

                                <p>Breve descrição do evento, pode ser um paragrafo pequeno</p>

                                <button>Conectar</button>
                            </div>

                            <div className="item">
                                <h1>Titulo do Evento</h1>

                                <p>Breve descrição do evento, pode ser um paragrafo pequeno</p>

                                <button>Conectar</button>
                            </div>
                        </div>
                    </div>

                    <div className="visao">
                        <div className="titulo_2">
                            <h1>Visão</h1>
                            <hr />
                        </div>

                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>


                    <div className="contato">
                        <div className="titulo_2">
                            <h1>Contato</h1>
                            <hr />
                        </div>

                        <div className="mapa">
                            <img src={Mapa} alt="" />
                        </div>

                        <div className="informacoes_contato">
                            <p>Rua Niterói, 180 - Centro</p>
                            <p>São Caetano  do  Sul - SP</p>
                            <p>(11) 4225-2000</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Home;