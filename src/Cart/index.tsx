import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../store'

import { Botao } from '../PratoCard/styles'
import {
  Overlay,
  CartContainer,
  Sidebar,
  CartItem,
  Lixeira,
  TextItem
} from './styles'
import marguerita from '../assets/images/pizza.png'
import lixeira from '../assets/images/lixeira.png'

import { close } from '../store/reducers/cart'

const Cart = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          <CartItem>
            <img src={marguerita} />
            <TextItem>
              <h3>Nome do prato</h3>
              <span>R$ 60.90</span>
            </TextItem>
            <Lixeira>
              <img src={lixeira} />
            </Lixeira>
          </CartItem>
          <CartItem>
            <img src={marguerita} />
            <TextItem>
              <h3>Nome do prato</h3>
              <span>R$ 60.90</span>
            </TextItem>
            <Lixeira>
              <img src={lixeira} />
            </Lixeira>
          </CartItem>
        </ul>
        <p>
          <span>Valor total</span>
          <span>R$ 182,70</span>
        </p>
        <Botao>Continuar com a entrega</Botao>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
