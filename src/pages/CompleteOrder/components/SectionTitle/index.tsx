import { ReactNode } from 'react';
import { RegularText } from '../../../../components/Typography';
import './styles.scss'

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  icon: ReactNode;
}

export function SectionTitle({ title, icon }: SectionTitleProps) {
  return (
    <div className='SectionTitleContainer'>
      {icon}
      <div>
        <RegularText color="subtitle">{title}</RegularText>
        <RegularText size="s">{title}</RegularText>
      </div>
    </div>
  );
}
