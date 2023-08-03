import "./logintemplate.scss"
import AmazonLogo from "../../assets/amazon_logo.jpeg"
import LoginImage from "../../assets/login_image.png"
import LoginInputFeild from "./LoginInputFeild"
const LoginTemplate= () =>{

    return (
        <div className="login-template-main-container">
            <div className="login-template-main-block">
                <div className="login-template-main-block-header">
                   <img src={AmazonLogo} alt="amazon"></img>
                </div>
                <div className="login-template-main-block-footer">
                    <div className="login-text-block">
                       <span className="login-text">Login</span>
                    </div>
                    <div className="login-image-block">
                       <img className="tree-image" src={LoginImage} alt="amazon"></img>
                    </div>
                    <LoginInputFeild/>
                </div>
            </div>
        </div>
    )
}

export default LoginTemplate;