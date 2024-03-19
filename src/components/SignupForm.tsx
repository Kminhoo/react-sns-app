import { 
  createUserWithEmailAndPassword, 
  getAuth,
  GoogleAuthProvider, 
  signInWithPopup, 
  GithubAuthProvider 
} from 'firebase/auth'

import { app } from 'firebaseApp'

import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import './SignupForm.scss'


const SignupForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()

  const onClickSocialLogin = async (e:any) => {
    const { target: {name} } = e

    const auth = getAuth(app)
    let provider;

    if(name === 'google') {
      provider = new GoogleAuthProvider()
    }

    if(name === 'github') {
      provider = new GithubAuthProvider()
    }

    await signInWithPopup(auth, provider as GoogleAuthProvider | GithubAuthProvider)
    .then((result) => {
      console.log(result)
      navigate('/users/login')
      toast.success("회원가입이 성공했습니다!")
    })
    .catch((error) => {
      const errorMessage = error.code
      toast.error(errorMessage)
    })
  }

  const onSubmit = async (e:any) => {
    e.preventDefault()

    try {
      const auth = getAuth(app)
      await createUserWithEmailAndPassword(auth, email, password)
      navigate('/users/login')
      toast.success("회원가입이 성공했습니다!!")
    } catch (error: any) {
      toast.error(error?.code)
    }
  }

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { target: { name, value } } = e

    if(name === 'email') {
      setEmail(value)
      const emailRegex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/
      
      if(!value.match(emailRegex)) {
        setError("이메일 형식이 올바르지 않습니다.")
      } else {
        setError("")
      }
    }

    if(name === 'password') {
      setPassword(value)

      if(value.length < 8) {
        setError("비밀번호는 8자리 이상이어야 합니다.")
      } else {
        setError("")
      }
    }

    if(name === 'password__confirmation') {
      setPasswordConfirmation(value)

      if(password !== value) {
        setError("비밀번호가 같지 않습니다.")
      } else {
        setError("")
      }
    }
  }

  return (
    <form className='form form--lg' onSubmit={onSubmit}>
      <div className='form__title'>회원가입</div>

      <div className='form__block'>
        <label htmlFor='email'>이메일</label>
        <input 
          type='text' 
          name='email' 
          id='email' 
          required
          value={email} 
          onChange={onChange}
        />
      </div>

      <div className='form__block'>
        <label htmlFor='password'>비밀번호</label>
        <input 
          type='password' 
          name='password' 
          id='password' 
          required 
          value={password}
          onChange={onChange}
        />
      </div>

      <div className='form__block'>
        <label htmlFor='password__confirmation'>비밀번호 확인</label>
        <input 
          type='password' 
          name='password__confirmation' 
          id='password__confirmation' 
          required 
          value={passwordConfirmation}
          onChange={onChange}
        />
      </div>

      {error && error.length > 0 && (
        <div className='form__block'>
          <p className='form__error'>{error}</p>
        </div>
      )}


      <div className='form__block form__login--btn'>
        <p>계정이 있으신가요?</p>
        <Link to='/users/login' className='form__link'>
          로그인
        </Link>
      </div>

      <div className='form__block'>
        <button 
          type='submit' 
          className='form__btn--submit'
          disabled={!!error?.length}
        >
            회원가입
        </button>
      </div>

      <div className='form__block'>
        <button 
          type='button'
          name='google' 
          className='form__btn--google'
          onClick={onClickSocialLogin}
        >
          SignUp With Google
        </button>
      </div>

      <div className='form__block'>
        <button 
          type='button'
          name='github' 
          className='form__btn--github'
          onClick={onClickSocialLogin}
        >
            SingUp With Github
        </button>
      </div>
    </form>
  )
}

export default SignupForm