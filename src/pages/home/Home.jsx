import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import BannerHome from "../../assets/img/bannerhome.png"
import { Link } from "react-router-dom";
import Mapinha from "../../assets/img/Mapa_img.png"
import "./Home.css"
const Home = () => {
    return (   //Home meus crias
        <>
            <Header
                Usuario = "none"
                naver="none"
            />
            <main className="layout_grid" >
                {/* Banner */}
                <div className="banner-div-home">
                    <img src={BannerHome} alt="Area de eventos da escola de informatica" />
                </div>
                {/* Banner */}

                {/* Cards */}
                <div className="cards-home">

                    <h2>Próximos Eventos</h2>
                    <hr />

                    <div className="card-pai">

                        <div className="cardzin">
                            <h2>Lorem</h2>
                            <p>Lorem ipsum dolor sit amet consecteturcorrupti tempora! Delectus fugia</p>
                            <Link className="link-card" to="/Login">Conectar</Link>
                        </div>

                        <div className="cardzin">
                            <h2>Lorem</h2>
                            <p>Lorem ipsum dolor sit amet consecteturcorrupti tempora! Delectus fugia</p>
                            <Link className="link-card" to="/Login">Conectar</Link>
                        </div>

                        <div className="cardzin">
                            <h2>Lorem</h2>
                            <p>Lorem ipsum dolor sit amet consecteturcorrupti tempora! Delectus fugia</p>
                            <Link className="link-card" to="/Login">Conectar</Link>
                        </div>

                        <div className="cardzin">
                            <h2>Lorem</h2>
                            <p>Lorem ipsum dolor sit amet consecteturcorrupti tempora! Delectus fugia</p>
                            <Link className="link-card" to="/Login">Conectar</Link>
                        </div>

                    </div> {/*Card-pai(aquele que configura os cardzin)*/}

                </div>
                {/* Cards */}

                {/*Segundo Banner */}
                <div className="segundo-banner">
                    {/* <img src={Banner2} alt="Imagem meio roxa com duas faixas escuras" /> */}
                    <h2>Visão</h2>
                    <hr />
                    <div className="segundo-p">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus neque ipsum voluptatibus animi laudantium enim eius fugiat dolor voluptas nesciunt quos asperiores rem, eum dicta, expedita, minus odit facere eaque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ducimus aperiam recusandae, dolorem illum voluptatem, in nemo voluptas eum saepe deserunt officiis non dolores minima quos quam animi praesentium. Inventore?
                        </p>
                    </div>
                </div>
                {/*Segundo Banner */}

                {/*Pre-footer */}
                <div className="pre-footer">

                    <h2>Contato</h2>
                    <hr />

                    <div className="pai-pre-footer">

                        <div className="mapa">
                            <img src={Mapinha} alt="" />
                        </div>

                        <div className="informacoes">
                            <p>Rua Niterói, 180 - Centro</p>
                            <p>São Caetano  do  Sul - SP</p>
                            <p>(11) 4225-2000</p>
                        </div>
                       
                    </div>
                </div>
                {/*Pré-footer */}
            </main>

            <Footer />
        </>
    )
}
export default Home;