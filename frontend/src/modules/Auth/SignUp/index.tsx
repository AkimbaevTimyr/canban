import '../style/style.scss';
import logo from '../../../assets/images/Logo.svg';
import main from '../../../assets/images/LogoMain.svg';
import google from '../../../assets/images/Google.svg';

function SignUp() {
  return (
    <div className='wrapper'>
        <div className='login'>
            <div className='login_left'>
                <img src={main} />
            </div>
            <div className='login_right'>
                <div className='login_right_header'>
                    <img className='login_right_header_img' src={logo} width="60px" height="60px" />
                    <h1 className='login_right_header_title'>Create an account</h1>
                    <p className='login_right_header_desc'>Start your 30-day free trial.</p>
                </div>
                <div className='login_right_form'>
                    <form>
                        <div className='login_right_form_fields'>
                            <label htmlFor='name' className='input_label'>Name*</label>
                            <input type='text' id='name' className='form_input' placeholder='Enter your name'/>

                            <label htmlFor='email'  className='input_label'>Email*</label>
                            <input type='email' id='email' className='form_input' placeholder='Enter your email' />

                            <label htmlFor='password'  className='input_label'>Password*</label>
                            <input type='password' id='password' className='form_input' placeholder='Enter your password' />
                            <p className='form_input_desc'>Must be at least 8 characters.</p>

                            <button className='form_button' type='submit'>Get started</button>
                        </div>
                        
                    </form>
                </div>
                <div className='login_right_google'>
                    <a href='#' className='login_right_google_link'>
                        <img src={google}  className='login_right_google_link_img'/> Sign in with Google
                    </a>
                </div>
                <div className='login_right_bottom'>
                    <p className='account_check'>Already have an account?</p> 
                    <a href='/login' className='login_link'>Log in</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp;