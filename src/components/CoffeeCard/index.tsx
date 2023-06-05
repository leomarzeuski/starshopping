import CartButton from '../CartButton';
import AlertDialog from '../Dialog';
import { RegularText } from '../Typography';
import './styles.scss';



export interface People {
  name?: string;
  title?: string;
}

interface StarWarsProps {
  idItem?: string;
  starwars: People;
  get: string;
}

export function CoffeeCard({ starwars, idItem, get }: StarWarsProps) {

  return (
    <>
      <div className="starwars-card-container">

        <h1 className="name">
          {starwars?.name}{starwars?.title}
        </h1>

        <div className="card-footer">
          <div>
            <RegularText size="s">R$</RegularText>
            <p className='price'>
              100
            </p>
          </div>

          <CartButton starwars={starwars} />
        </div>

        <AlertDialog id={idItem} get={get} />
      </div>
    </>
  );
}
