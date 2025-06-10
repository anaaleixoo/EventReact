import Logo from "../../assets/img/Logo.svg"
import Botao from "../../components/botao/Botao"
import Fundologin from "../../assets/img/fundoLogin.svg"
import "./Login.css"
import api from "../../services/Services" 
import secureLocalStorage from "react-secure-storage"
import { useState } from 'react';
import {userDecodeToken} from "../../auth/Auth" 
import { useNavigate } from "react-router-dom"


//componente funcional , toda funcao tem um return
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    async function realizarAutenticacao(e) {
        e.preventDefault();
        const usuario = {
            email: email,
            senha: senha
        }
        if (senha.trim() != "" || email.trim() != "") {
            try {
                const resposta = await api.post("Login", usuario);
                const token = resposta.data.token

                if (token) {
                    const tokenDecodificado = userDecodeToken(token);
                    //console.log("Token decodificado");
                    //console.log(tokenDecodificado);
                    secureLocalStorage.setItem("tokenLogin", JSON.stringify(tokenDecodificado));

                    if (tokenDecodificado.tipoUsuario === "aluno") {
                        //redirecionar a tela de aluno
                        navigate("/listagemEvento");
                    } else {
                        //ele vai me encaminhar para a tela cadastro
                        navigate("/CadastroEvento")
                    }
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            alert("preencha os campos vazios para realizar o login");
        }

    }

    return (
        <main className="main_login">

            <div className="banner">
                <div id="fundo_login" />
            </div>

            <section className="section_login">
                <img src={Logo} alt="Logo do Event" />

                <form action="" className="form_login" onSubmit=
                    {realizarAutenticacao}>
                    <img src={Logo} alt="" className="logo_img" />

                    <div className="campos_login">
                        <div className="campo_input">
                            <input type="Email" name="email"
                             placeholder="Email" 
                             value={email}
                             onChange={(e)=>setEmail(e.target.value)}
                             />
                        </div>

                        <div className="campo_input">
                            <input type="PassWord" name="senha"
                             placeholder="PassWord"
                              value={senha}
                             onChange={(e)=>setSenha(e.target.value)}
                             />
                        </div>

                    </div>
                    <a href="">Esqueceu Sua Senha?</a>
                    <Botao botao="Login" />
                </form>
            </section>
        </main>
    )
}

export default Login;