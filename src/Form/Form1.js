
import React from "react";
import './Form1.css'
import {FcGoogle} from 'react-icons/fc'
import Microsoft from '../images/microsoft.png'
import Slack from '../images/slack.avif'
import Appsdeployer from '../images/appsdeployer.png'
const Form = () => {

    return (

        <div className="wrapper">
            <img className="apps_logo_css" src={Appsdeployer} atl="#"></img>
            <h6>Login to continue</h6>
            <form>
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Password" />
               
            </form>
            <div className="forgot">
                {/* <input type="checkbox" id="checkbox" /> */}
                <label for="forgot-label">Forgot password?</label>

            </div>
            <button>Login</button>
            <div className="member"> Don't have an account? <a href="#">Create account</a></div>
            <div className="continue"><hr/><label>Or continue with</label> <hr/></div>
            <div className="login-icon">
                <div  className="icon-circle" ><FcGoogle className="icon-circle-image"/> <label>Google</label></div>
                <div  className="icon-circle" ><img className="icon-circle-image" src={Microsoft} alt="#"/><label>Microsoft</label></div>
                <div  className="icon-circle" ><img className="icon-circle-image" src={Slack} alt="#"/><label>Slack</label></div>

            </div>
            {/* <div className="login-icon">
                <div >Google</div>
                <div >Microsoft</div>
                <div >Slack</div>

            </div>
        */}
        </div>
    )
}

export default Form;