import './styles.scss'
import heroImage from '../../../../assets/hero-image.png'
import { InfoWithIcon } from '../../../../components/InfoWithIcon'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

export function Hero() {
    return (
      <div className="HeroContainer">
        <div className="HeroContent container">
          <div>
            <section>
              <h2 className="HeroTitle">
                Encontre seus personagens favoritos
              </h2>
              <h3 className="RegularText subtitle">
                Com o Star Shopping você recebe seu café onde estiver, a qualquer
                hora
              </h3>
            </section>
  
            <div className="BenefitsContainer">
              <InfoWithIcon
                iconColor={'red'}
                icon={<ShoppingCart weight="fill" />}
                text="Compra simples e segura"
              />
              <InfoWithIcon
                iconColor={'green'}
                icon={<Package weight="fill" />}
                text="Embalagem mantém o café intacto"
              />
              <InfoWithIcon
                iconColor={'blue'}
                icon={<Timer weight="fill" />}
                text="Entrega rápida e rastreada"
              />
              <InfoWithIcon
                iconColor={'purple'}
                icon={<Coffee weight="fill" />}
                text="O Produto chega fresquinho até você"
              />
            </div>
          </div>
  
          <div className="imageContainer">
            <img src={heroImage} alt="" />
          </div>
        </div>
      </div>
    )
  }