import { TitleText } from '../../../../components/Typography'
import { useCart } from '../../../../hooks/useCart'
import { CoffeeCartCard } from '../CoffeeCartCard'
import { ConfirmationSection } from './ConfirmationSection'
import './styles.scss';

export function SelectedCoffees() {
  const { cartItems } = useCart()

  return (
    <div className="SelectedCoffeesContainer">
      <TitleText size="xs" color="subtitle">
        Cafés selecionados
      </TitleText>

      <div className="DetailsContainer">
        {cartItems.map((item, index) => (
          <CoffeeCartCard key={index} coffee={item} />
        ))}

        <ConfirmationSection />
      </div>
    </div>
  );
}
