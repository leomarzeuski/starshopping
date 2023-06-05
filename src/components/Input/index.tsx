import { forwardRef, InputHTMLAttributes } from 'react'
import { RegularText } from '../Typography'
import './styles.scss'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  rightText?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, rightText, className, ...props }, ref) => {
    return (
      <div className={`input-wrapper ${className}`}>
        <div className={`input-container ${error ? 'input-container-error' : ''}`}>
          <input ref={ref} {...props} className="input-styled" />
          {rightText && <p className="right-text">{rightText}</p>}
        </div>
        {error && <RegularText size="s">{error}</RegularText>}
      </div>
    )
  },
)
