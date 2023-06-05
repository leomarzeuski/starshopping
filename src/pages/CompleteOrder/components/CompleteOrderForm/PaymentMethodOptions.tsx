import { Bank, CreditCard, Money } from 'phosphor-react';
import { PaymentMethodInput } from '../PaymentMethodInput';
import './styles.scss'

import { useFormContext } from 'react-hook-form';
import { RegularText } from '../../../../components/Typography';

// eslint-disable-next-line react-refresh/only-export-components
export const paymentMethods = {
  credit: {
    label: 'Cartão de Cŕedito',
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: 'Cartão de Débito',
    icon: <Bank size={16} />,
  },
  money: {
    label: 'Dinheiro',
    icon: <Money size={16} />,
  },
};

export function PaymentMethodOptions() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const paymentMethodError = errors?.paymentMethod?.message as string;

    return (
      <div className="PaymentMethodOptionsContainer">
        {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
          <PaymentMethodInput
            key={label}
            id={key}
            icon={icon}
            label={label}
            value={key}
            {...register('paymentMethod')}
          />
        ))}
        {paymentMethodError && <RegularText>{paymentMethodError}</RegularText>}
      </div>
    );
}
