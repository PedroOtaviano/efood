import pizzaImg from '../assets/images/pizza.png'
import { CardContainer, Botao, CardTitulo, Cardtexto } from './styles'

const PratoCard = () => {
  return (
    <CardContainer>
      <img src={pizzaImg} alt="Marguerita" />
      <CardTitulo>Pizza Marguerita</CardTitulo>
      <Cardtexto>
        A clássica Marguerita: molho de tomate suculento, mussarela derretida,
        manjericão fresco e um toque de azeite. Sabor e simplicidade!
      </Cardtexto>
      <Botao>Adicionar ao carrinho</Botao>
    </CardContainer>
  )
}

export default PratoCard
