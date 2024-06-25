import {ButtonHTMLAttributes, ReactNode,} from 'react'

import clsx from 'clsx'

import s from './button.module.scss'

export type ButtonProps = {
  children: ReactNode
  className?: string
  fullWidth?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = (
  props: ButtonProps,
) => {
  const {
    children,
    className,
    fullWidth,
    ...rest
  } = props

  const finalClassName = clsx(s.button, fullWidth && s.fullWidth, className)

  return (
    <button className={finalClassName} {...rest} >
      {children}
    </button>
  )
}