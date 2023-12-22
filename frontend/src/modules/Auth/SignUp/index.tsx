import '../style/style.scss';
import logo from '../../../assets/images/Logo.svg';
import main from '../../../assets/images/LogoMain.svg';
import google from '../../../assets/images/Google.svg';
import { useState } from 'react';
import { redirect, useNavigate, useNavigation } from 'react-router-dom';
import api from '../../../app/api/api';

function SignUp() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [error, setError] = useState();

    let navigate = useNavigate();

    const handleSumbit = (e: any) => {
        e.preventDefault();
        api.post('/api/signup', {
            name,
            email,
            password
        }).then((resp) => {
            alert('Вы успешно зарегистрировались. Теперь вы будете перенаправлены на станицу авторизации')
            navigate('/login')
        }).catch((error) => {
            console.log(error)

            if (error.response && error.response.data && error.response.data.errors) {

                const errorField = Object.keys(error.response.data.errors)[0];
                const fieldError = Object.keys(error.response.data.errors[errorField][0]);
                const errorMessage: any[] = error.response.data.errors[errorField][0][fieldError[0]];

                alert(`Ошибка при регистрации: ${errorMessage[0]}`);
            } else {
                alert('Произошла ошибка при регистрации. Пожалуйста, повторите попытку.');
            }
        })
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
                    <h1 className='login_right_header_title'>Create an account</h1>
                </div>
                <div className='login_right_form'>
                    <form onSubmit={handleSumbit}>
                        <div className='login_right_form_fields'>
                            <label htmlFor='name' className='input_label'>Name*</label>
                            <input onChange={(e) => setName(e.target.value)} type='text' id='name' className='form_input' placeholder='Enter your name'/>

                            <label htmlFor='email'  className='input_label'>Email*</label>
                            <input onChange={(e) => setEmail(e.target.value)} type='email' id='email' className='form_input' placeholder='Enter your email' />

                            <label htmlFor='password'  className='input_label'>Password*</label>
                            <input onChange={(e) => setPassword(e.target.value)} type='password' id='password' className='form_input' placeholder='Enter your password' />
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