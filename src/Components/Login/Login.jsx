import {FaUser,FaLock} from "react-icons/fa"

import {useState} from "react";
import "./Login.css";
const Login = () => {

  const [username,setUsername]=useState("");
  const [password,setPassword] = useState("");
  return (
    <div>
      <div classsName="container">
        <form>
            <h1>Acesse o sistema</h1>
            <div>
              <input type="email" placeholder="E-mail"/>
              <FaUser classsName="icon"/>
            </div>

            <div>
              <input type="password" placeholder="Senha"/>
              <FaLock className="icon"/>
            </div>

            <div className="recall-forget">
                <label>
                    <input type="checkbox"/>
                </label>
            </div>
            <button>Entrar</button>
            <div className="signup-link">
                <p>Não tem uma conta?<a href="#">Registrar</a></p>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Login
