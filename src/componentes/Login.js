import swal from "sweetalert";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const URI = "http://localhost:8080/usuario"

const Login = () => {

    const navigate = useNavigate();
    const [usuarios, setUsuarios] = useState([])
    const [id_usuario, setId_usuario] = useState("");
    const [clave_usuario, setClave_usuario] = useState("");
    const guardar = async (e) => {
        e.preventDefault();

        try {
            const res = await axios({
                method: "GET",
                url: URI + "login?usuario=" + id_usuario + "&clave=" + clave_usuario
            });
            setUsuarios(res.data)
            if (res.data.id_usuario == null) {

                swal("Cliente NO Autorizado!", "Presiona el botón!", "error");
                navigate("/");

            } else {
                sessionStorage.setItem("usuario", id_usuario);
                sessionStorage.setItem("clave", clave_usuario);
                sessionStorage.setItem("nombre", res.data.nombre_usuario);
                swal("Bienvenido " + res.data.nombre_usuario + "!", "Presiona el butón!", "success");
                navigate("/principal");
            }
        }
        catch (error) {
            swal("Operación NO realizada")
        }
    };


    return (
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-md-4 col-md-offset-4">
                    <h1 class="text-center login-title">Sign in your account</h1>
                    <div class="account-wall">
                        <img class="profile-img" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
                            alt=""/>
                            <form onSubmit={guardar}>
                                <input type="text" name="id" id="id" value={id_usuario} maxLength={15} required
                                    onInvalid={e => e.target.setCustomValidity('El campo Id cliente es obligatorio')}
                                    onInput={e => e.target.setCustomValidity('')} class="form-control input-lg" placeholder="Digite el ID" onChange={(e) => setId_usuario(e.target.value)} />
                            <br></br>
                            <input type="password" name="password" id="password"
                                value={clave_usuario}
                                onChange={(e) => setClave_usuario(e.target.value)}
                                maxLength={50}
                                required
                                onInvalid={e => e.target.setCustomValidity('El campo Contraseña  es obligatorio')}
                                onInput={e => e.target.setCustomValidity('')}
                                class="form-control input-lg" placeholder="Contraseña" />
                            <input type="submit" className="btn  btn-success btn-block" value="Ingresar" />
                            <label class="checkbox pull-left">
                                <input type="checkbox" value="remember-me" />
                                Remember me
                            </label>
                            <a href="help" class="pull-right need-help">Need help?</a><span class="clearfix"></span>
                        </form>
                    </div>
                    <a href="create" class="text-center new-account">Create an account</a>
                </div>
            </div>
        </div>






                


                ); 
    };
                export default Login;