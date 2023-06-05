import { MapPinLine, CurrencyDollar } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { TitleText } from '../../../../components/Typography'
import { SectionTitle } from '../SectionTitle'
import { AddressForm } from './AddressForm'
import { PaymentMethodOptions } from './PaymentMethodOptions'
import './styles.scss'

export function CompleteOrderForm() {
  const { colors } = useTheme()

  return (
    <div className="CompleteOrderFormContainer">
      <TitleText size="xs" color="subtitle">
        Complete seu pedido
      </TitleText>

      <div className="FormSectionContainer">
        <SectionTitle
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
          icon={<MapPinLine color={colors['brand-yellow-dark']} size={22} />}
        />

        <AddressForm />
      </div>

      <div className="FormSectionContainer">
        <SectionTitle
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          icon={<CurrencyDollar color={colors['brand-purple']} size={22} />}
        />

        <PaymentMethodOptions />
      </div>
    </div>
  );
}
