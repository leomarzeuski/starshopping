import './styles.scss'
import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode;
  label: string;
};

export const PaymentMethodInput = forwardRef<
  HTMLInputElement,
  PaymentMethodInputProps
>(({ id, icon, label, ...props }, ref) => {
  return (
    <div className="PaymentMethodContainer">
      <input id={id} type="radio" {...props} name="paymentMethod" ref={ref} />
      <label htmlFor={id}>
        <div className="ContentContainer">
          {icon}
          {label}
        </div>
      </label>
    </div>
);
});
