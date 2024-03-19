import { useState } from 'react'

import { useNavigate, Link } from 'react-router-dom'

import { 
  signInWithEmailAndPassword, 
  getAuth, 
  GoogleAuthProvider, 
  GithubAuthProvider, 
  signInWithPopup 
} from 'firebase/auth'

import { app } from 'firebaseApp'

import { toast } from 'react-toastify'

import './SignupForm.scss'

const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()

  const onSubmit = async (e:any) => {
    e.preventDefault()

    try {
      const auth = getAuth(app)
      await signInWithEmailAndPassword(auth, email, password)
      navigate('/')
      toast.success("로그인이 성공했습니다!!")
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
  }

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
      navigate('/')
      toast.success("로그인이 성공했습니다!")
    })
    .catch((error) => {
      const errorMessage = error.code
      toast.error(errorMessage)
    })
  }

  return (
    <form className='form form--lg' onSubmit={onSubmit}>
      <div className='form__title'>로그인</div>

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

      {error && error.length > 0 && (
        <div className='form__block'>
          <p className='form__error'>{error}</p>
        </div>
      )}


      <div className='form__block form__login--btn'>
        <p>계정이 없으신가요??</p>
        <Link to='/users/signup' className='form__link'>
          회원가입
        </Link>
      </div>

      <div className='form__block'>
        <button 
          type='submit' 
          className='form__btn--submit'
          disabled={!!error?.length}
        >
            로그인
        </button>
      </div>

      <div className='form__block'>
        <button 
          type='button' 
          className='form__btn--google'
          name='google'
          onClick={onClickSocialLogin}
        >
            Google Login
        </button>
      </div>

      <div className='form__block'>
        <button 
          type='button' 
          className='form__btn--github'
          name='github'
          onClick={onClickSocialLogin}
        >
            Github Login
        </button>
      </div>
    </form>
  )
}

export default LoginForm