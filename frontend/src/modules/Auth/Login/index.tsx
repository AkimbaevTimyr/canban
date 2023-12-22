import '../style/style.scss';
import logo from '../../../assets/images/Logo.svg';
import main from '../../../assets/images/LogoMain.svg';
import google from '../../../assets/images/Google.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../../app/api/api';

function Login() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    let navigate = useNavigate();
    localStorage.setItem('token', '')
    localStorage.setItem('isAuth', 'false');

    const handleSumbit = async (e: any) => {
        e.preventDefault();
        try{
            api.post('/api/login', {
                email,
                password
            }).then((resp) => {
                localStorage.setItem('token', resp.data.token)
                localStorage.setItem('isAuth', 'true');
                navigate('/dashboard');
            }).catch((error) => {
                console.log(error)
                alert(error.response.data.message)
            })
            
        } catch (error: any) {
            const responseData = error.response ? error.response.data : null;
            const errorMessage = responseData ? responseData.message : 'Something went wrong';
            alert(errorMessage);
        }
    }

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
                    <form onSubmit={handleSumbit}>
                        <div className='login_right_form_fields'>
                            <label htmlFor='email'  className='input_label'>Email*</label>
                            <input 
                                onChange={(e) => setEmail(e.target.value)}
                                type='email' 
                                id='email' 
                                className='form_input' 
                                placeholder='Enter your email' 
                                required
                            />

                            <label htmlFor='password'  className='input_label'>Password*</label>
                            <input 
                                onChange={(e) => setPassword(e.target.value)}
                                type='password' 
                                id='password' 
                                className='form_input' 
                                placeholder='Enter your password' 
                                required
                            />
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