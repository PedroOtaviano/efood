import imagemDolce from '../assets/images/la_dolce.png'
import estrela from '../assets/images/estrela.png'
import { CardContainer, CardLink, CardTitulo, Texto } from './styles'
import Tag from '../Tag'

const CardRestaurante = () => {
  return (
    <CardContainer>
      <Tag>Italiana</Tag>
      <img src={imagemDolce} alt="Dolce" />
      <CardTitulo>
        <h3>La Dolce Vita Trattoria</h3>
        <span>
          4.9 <img src={estrela} alt="Estrela" />
        </span>
      </CardTitulo>
      <Texto>
        A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
        Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo
        no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor
        inesquecível. Peça já!
      </Texto>
      <CardLink to="/Dolce">Saiba mais</CardLink>
    </CardContainer>
  )
}

export default CardRestaurante
