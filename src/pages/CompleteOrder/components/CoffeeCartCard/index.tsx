import { Trash } from 'phosphor-react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { RegularText } from '../../../../components/Typography'
import { CartItem } from '../../../../contexts/CartContext'
import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'
import './styles.scss'
interface CoffeeCardCardProps {
  coffee: CartItem
}

export function CoffeeCartCard({ coffee }: CoffeeCardCardProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart()

  function handleIncrease() {
    changeCartItemQuantity(coffee.name, 'increase')
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.name, 'decrease')
  }

  function handleRemove() {
    removeCartItem(coffee.name)
  }

  const coffeeTotal = coffee.price * coffee.quantity
  const formattedPrice = formatMoney(coffeeTotal)

    return (
      <div className="CoffeeCartCardContainer">
        <div>
  
          <div>
            <RegularText color="subtitle">{coffee.name}</RegularText>
            <div className="ActionsContainer">
              <QuantityInput
                size="small"
                quantity={coffee.quantity}
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
              />
              <button className="RemoveButton" onClick={handleRemove}>
                <Trash size={16} />
                REMOVER
              </button>
            </div>
          </div>
        </div>
  
        <p>R$ 100,00</p>
      </div>
    )
  }