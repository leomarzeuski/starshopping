import './styles.scss'

import { Minus, Plus } from 'phosphor-react'

interface QuantityInputProps {
  size?: 'medium' | 'small'
  onIncrease: () => void
  onDecrease: () => void
  quantity: number
}

export function QuantityInput({
  size = 'medium',
  onIncrease,
  onDecrease,
  quantity,
}: QuantityInputProps) {
  return (
    <div className={`QuantityInputContainer ${size}`}>
      <button className="IconWrapper" disabled={quantity <= 1} onClick={onDecrease}>
        <Minus size={14} weight="fill" />
      </button>
      <input type="number" readOnly value={quantity} />
      <button className="IconWrapper" onClick={onIncrease}>
        <Plus size={14} weight="fill" />
      </button>
    </div>
  );
}
