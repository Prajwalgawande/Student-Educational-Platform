import React from 'react'
import './signup.css'
import signupImg from '../../assets/signup.jpg'
import { Link, useNavigate } from 'react-router-dom'
const Signup = ({authvalidation}) => {
  const navigate=useNavigate();
  const signin=()=>{
    authvalidation(true)
    navigate('/')
  }
  return (
    <div>
      <div class="Signup_container">
        <div class="image"><img src={signupImg} alt="" /></div>
        <div class="MainContent">
          <h1>Join Our Learning Community</h1>
          <p>SignUp To Start Your Learning Journey</p>
          <form action="">
            <div class="fields">
              <div class="field">
                <label for="">First Name</label>
                <input type="text" />
              </div>
              <div class="field">
                <label for="">Last Name</label>
                <input type="text" />
              </div>
            </div>

            <div class="fields">
              <div class="field">
                <label for="">Email Address</label>
                <input type="text" />
              </div>
              <div class="field">
                <label for="">Role</label>
                <input type="text" />
              </div>
            </div>

            <div class="fields">
              <div class="field">
                <label for="">Password</label>
                <input type="text" />
              </div>
              <div class="field">
                <label for="">Confirm Password</label>
                <input type="text" />
              </div>
            </div>

            <div class="fields">
              <div class="field">
                <label for="">Education Level</label>
                <input type="text" />
              </div>
              <div class="field">
                <label for="">Profile</label>
                <input type="text" />
              </div>
            </div>

            <div class="fields">
              <div class="field">
                <label for="">Guardian Information</label>
                <input type="text" />
              </div>
              <div class="field">
                <label for="">Area of Study</label>
                <input type="text" />
              </div>
            </div>
            <div class="fields">
              <div class="field">
                <label for="">Introduction</label>
                <textarea style={{"width":" 95%", "height": "3.5rem"}} rows="5"/>
              </div>

            </div>

            <div class="signup_footer">
              <input type="checkbox"/>
                <p>By signing up, you agree to our Terms and Conditions.</p>
            </div>

            <div class="buttons">
              <button>Cancel</button>
              <button onClick={signin}>Submit</button>
            </div>
          </form>
          <h5><Link to={'/login'}>I have account Login</Link></h5>
        </div>
      </div>
    </div>
  )
}

export default Signup