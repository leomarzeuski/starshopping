import { ShoppingCart } from 'phosphor-react';
import { QuantityInput } from '../QuantityInput';
import './style.scss';
import { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import { StarWarsItem } from '../../contexts/CartContext';

export interface People {
  name?: string;
  title?: string;
}

interface StarWarsProps {
  starwars: People;
}

const CartButton: React.FC<StarWarsProps> = ({ starwars }) => {
  const { addCoffeeToCart } = useCart();

  const [quantity, setQuantity] = useState(1);

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }

  function handleDecrease() {
    setQuantity((state) => state - 1);
  }

  function handleAddToCart() {
    const coffeeToAdd: StarWarsItem = {
      ...starwars,
      quantity,
    };

    addCoffeeToCart(coffeeToAdd);

    setQuantity(1);
  }

  return (
    <div className="add-cart-wrapper">
      <QuantityInput
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
        quantity={quantity}
      />
      <button onClick={handleAddToCart} title="Add starwars item to cart">
        <ShoppingCart weight="fill" size={22} />
      </button>
    </div>
  );
};

export default CartButton;
