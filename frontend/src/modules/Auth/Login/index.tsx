import '../style/style.scss';
import logo from '../../../assets/images/Logo.svg';
import main from '../../../assets/images/LogoMain.svg';
import google from '../../../assets/images/Google.svg';

function Login() {
  return (
    <div className='wrapper'>
        <div className='login'>
            <div className='login_left'>
                <img src={main} />
            </div>
            <div className='login_right'>
                <div className='login_right_header'>
                    <img className='login_right_header_img' src={logo} width="60px" height="60px" />
                    <h1 className='login_right_header_title'>Log in to your account</h1>
                    <p className='login_right_header_desc'>Welcome back! Please enter your details..</p>
                </div>
                <div className='login_right_form'>
                    <form>
                        <div className='login_right_form_fields'>
                            <label htmlFor='email'  className='input_label'>Email*</label>
                            <input type='email' id='email' className='form_input' placeholder='Enter your email' />

                            <label htmlFor='password'  className='input_label'>Password*</label>
                            <input type='password' id='password' className='form_input' placeholder='Enter your password' />
                            <button className='form_button' type='submit'>Sign in</button>
                        </div>
                        <div className='login_right_form_password_options'>
                            <div className='login_right_form_remember_me'>
                                <input type='checkbox' id='remember' />
                                <label htmlFor='remember'>Remember for 30 days</label>
                            </div>
                            <a href='/forgot-password' className='login_right_form_forgot_password'>Forgot password?</a>
                        </div>
                    </form>
                </div>
                <div className='login_right_google'>
                    <a href='#' className='login_right_google_link'>
                        <img src={google}  className='login_right_google_link_img'/> Sign in with Google
                    </a>
                </div>
                <div className='login_right_bottom'>
                    <p className='account_check'>Don’t have an account?</p> 
                    <a href='/signup' className='login_link'>Sign up</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login