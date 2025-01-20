import { ButtonHTMLAttributes, ReactNode } from 'react'
import './Button.scss'

type ButtonVariant = 'primary' | 'secondary' | 'transparent' | 'gray' | 'icon' | 'call'
type ButtonSize = 'big' | 'normal'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant
  size?: ButtonSize
  children: ReactNode
  className?: string
}

const Button = ({ variant, size = 'normal', children, className = '', ...props }: ButtonProps) => {
  return (
    <button 
      className={`${variant}-button ${size}-size ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button 