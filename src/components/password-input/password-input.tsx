import {InputHTMLAttributes, useState} from 'react'
import s from './password-input.module.scss'
import open from '../../assets/open.png'
import close from '../../assets/close.png'

type Props = InputHTMLAttributes<HTMLInputElement>

export const PasswordInput = ({value, onChange, ...rest}: Props) => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(showPassword => !showPassword)
  }

  return (
    <div className={s.container}>
      <input
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        {...rest}
        className={s.input}
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className={s.button}
      >
        {<img src={showPassword ? open : close} alt="" className={s.eye}/>}
      </button>
    </div>
  )
}
