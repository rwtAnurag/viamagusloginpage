import "./logininputfeild.scss"
import GoogleIcon from "../../assets/google_icon.png"
import FacebookIcon from "../../assets/facebook_icon.png"
import ErrorImage from "../../assets/error_msg.png"
import { useState } from "react";

const LoginInputFeild = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmail = (e)=>{
    const { value } = e.target;
    setEmail(value);
    setEmailError('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Regular expression for email validation
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if(email===""){
      setEmailError('The email field is required.');
      return
    }
    if (!emailPattern.test(email)) {
      setEmailError('Please enter a valid email address.');
    } else {
      // Email is valid, you can proceed with further actions here
      console.log('Valid email:', email);
    }
  };

  return (
    <div className="login-input-feild-main-container">
        <div className="email-block-main ">
             <input className="custom-input" onChange={handleEmail} placeholder="Email" type="email" id="email" name="email" required />
        </div>
        {emailError!==""
          ?
          <div className="email-error">
            <img className="email-error-img" src={ErrorImage}></img>
            <span className="email-error-text">{emailError}</span>
          </div>
          : null
        }
        <div className="password-block-main">
             <input className="custom-input" placeholder="Password" type="password" id="password" name="password" required />
        </div>
        <button className="sign-in-button" onClick={handleSubmit}>Sign In</button>
        <div className="login-options">
            <span className="forgot-password">Forgot password</span>
            <span className="new-usersignup">New User? Sign Up</span>
        </div>
        <div className="or-text">
            <span>or</span>
        </div>
        <div className="login-with-google">
            <div  className="icon-main-root">
              <img src={GoogleIcon} className="icon-main" alt="google-image"></img>
            </div>
            <div className="text-main-root">
              <span className="text-main">CONTINUE WITH GOOGLE</span>
            </div>
        </div>
        <div className="login-with-facebook">
            <div  className="fb-icon-main-root">
              <img src={FacebookIcon} className="fb-icon-main" alt="google-image"></img>
            </div>
            <div className="fb-text-main-root">
              <span className="fb-text-main">CONTINUE WITH FACEBOOK</span>
            </div>
        </div>
    </div>
  );
};

export default LoginInputFeild;
