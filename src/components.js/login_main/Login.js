
import "./login.scss"
import LoginpageBgImage from "../../assets/login_page_bg_image.png"
import LoginTemplate from "../login_page_components/LoginTemplate";

const Login = () =>{
    const divStyle = {
        backgroundImage: `url(${LoginpageBgImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      };
    
    return(
        <> 
          <div className="login-page-maincontainer">
                <div  className="login-page-main-page-block1 background-image-example" >
                     <img className="log-in-image-img" src={LoginpageBgImage}></img>
                </div>
                <div className="login-page-main-page-block2" >

                </div>
                <LoginTemplate/>
          </div>
        </>
    )
}

export default Login;