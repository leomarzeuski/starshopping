import { Divider } from '@mui/material';
import ListComments from '../../components/ListComments';
import { OurCoffees } from '../../components/OurCoffees';
import { Hero } from './components/Hero';
import './styles.scss';

export function Home() {
  return (
    <div className="HomeContainer black-sky">
      <Hero />
      <Divider variant="middle" sx={{ my: '2rem' }} />
      <OurCoffees />
      <ListComments />
    </div>
  );
}
