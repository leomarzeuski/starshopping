import { ReactNode } from 'react'
import './styles.scss'

interface InfoWithIconProps {
  icon: ReactNode
  text: string | ReactNode
  iconColor: string
}

export function InfoWithIcon({ icon, text, iconColor }: InfoWithIconProps) {
  return (
    <div className="InfoWithIconContainer">
      <div className={`IconContainer ${iconColor}`}>{icon}</div>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </div>
  )
}
