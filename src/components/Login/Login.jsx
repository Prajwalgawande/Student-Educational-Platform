import React from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom'
const Login = ({authvalidation}) => {
  const navigate = useNavigate();
  const login=()=>{
    authvalidation(true);
    navigate('/')
  }
  return (
    <div>
      <div class="wrapper fadeInDown">
        <div id="formContent">
          <h2 class="active"> LOGIN </h2>

          <div class="fadeIn first">

          </div>

          <form>
            <input type="text" id="Email" class="fadeIn second" name="login" placeholder="login"/>
              <input type="text" id="password" class="fadeIn third" name="login" placeholder="password"/>
                <input type="submit" class="fadeIn fourth" onClick={login}value="Log In"/>
                </form>

                <div id="formFooter">
                  <a class="underlineHover" href="#">Forgot Password?</a>
                  <h6>If you havent register yet? <Link to={"/signup"}>Register now</Link></h6>
                </div>

              </div>
            </div>
        </div>
        )
}

        export default Login