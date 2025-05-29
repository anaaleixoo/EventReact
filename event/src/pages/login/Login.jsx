import Logo from "../../assets/img/Logo.svg"
import Botao from "../../components/botao/Botao"
import "./Login.css"

const Login = () => {
    return (
        <main className="main_login">
            
            <div className="banner">
                <div id="fundo_login"/>
            </div>

            <section className="section_login">
                <img src={Logo} alt="Logo do Event"/>

                <form action="" className="form_login">

                    <div className="campos_login">
                        <div className="campo_input">
                            <input type="Email" name="email" placeholder="Username"/>
                        </div>

                        <div className="campo_input">
                            <input type="PassWord" name="senha" placeholder="PassWord" />
                        </div>
                        
                        </div>
                    <a href="">Esqueceu Sua Senha?</a>
                    <Botao botao="Login"/>
                </form>
            </section>
        </main>
    )
}

export default Login;