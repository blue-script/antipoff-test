import React, {ChangeEvent} from 'react'
import {useSelector} from 'react-redux'
import {RootState} from '@/redux/store'
import {
  setConfirmPassword,
  setEmail,
  setError,
  setName,
  setPassword,
  setToken
} from '@/redux/registration-slice'
import s from './registration-form.module.scss'
import {Button} from '../button'
import {useAppDispatch} from '../../hooks/useAppDispatch'
import {PasswordInput} from '../password-input/password-input'

export const RegistrationForm: React.FC = () => {
  const dispatch = useAppDispatch()
  const {
    name,
    email,
    password,
    confirmPassword,
    error,
  } = useSelector((state: RootState) => state.registration)

  const validateEmail = (email: string) => {
    const emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/
    return emailRegex.test(email.toLowerCase())
  }

  const handleSubmit = (e: React.FormEvent) => {
    console.log(e)
    e.preventDefault()
    if (!validateEmail(email)) {
      dispatch(setError('Invalid email format'))
      return
    }
    if (password !== confirmPassword) {
      dispatch(setError('Passwords do not match'))
      return
    }
    // Симуляция запроса к API
    const simulatedToken = 'fake-jwt-token'
    localStorage.setItem('token', simulatedToken)
    dispatch(setToken(simulatedToken))
    dispatch(setError(''))
  }

  const changePassword = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setPassword(e.target.value))
  }

  const changeConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setConfirmPassword(e.target.value))
  }

  return (
    <div className={s.container}>
      <h2 className={s.title}>Регистрация</h2>
      <form className={s.form} onSubmit={handleSubmit}>
        <div className={s.field}>
          <label htmlFor="name" className={s.label}>Имя</label>
          <input
            type="text"
            id="name"
            name="name"
            className={s.input}
            value={name}
            onChange={(e) => dispatch(setName(e.target.value))}
          />
        </div>
        <div className={s.field}>
          <label htmlFor="email" className={s.label}>Электронная почта</label>
          <input
            type="email"
            id="email"
            name="email"
            className={`${s.input} ${error && s.errorBorder}`}
            value={email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
          />
          {error && <p className={s.error}>{error}</p>}
        </div>
        <div className={s.field}>
          <label htmlFor="password" className={s.label}>Пароль</label>
          <PasswordInput
            id="password"
            name="password"
            className={s.input}
            value={password}
            onChange={changePassword}
          />
        </div>
        <div className={s.field}>
          <label htmlFor="confirmPassword" className={s.label}>Подтвердите пароль</label>
          <PasswordInput
            id="confirmPassword"
            name="confirmPassword"
            className={s.input}
            value={confirmPassword}
            onChange={changeConfirmPassword}
          />
        </div>
        <Button type="submit" className={s.button} fullWidth={true}>Зарегистрироваться</Button>
      </form>
    </div>
  )
}