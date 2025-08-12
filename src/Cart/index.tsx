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
import lixeira from '../assets/images/lixeira.png'
import { formatarPreco } from '../ListaPratos'
import { close, remove } from '../store/reducers/cart'

const Cart = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removePrato = (id: number) => {
    dispatch(remove(id))
  }

  const GetTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} />
              <TextItem>
                <h3>{item.nome}</h3>
                <span>{formatarPreco(item.preco)}</span>
              </TextItem>
              <Lixeira onClick={() => removePrato(item.id)}>
                <img src={lixeira} />
              </Lixeira>
            </CartItem>
          ))}
        </ul>
        <p>
          <span>Valor total</span>
          <span>{formatarPreco(GetTotalPrice())}</span>
        </p>
        <Botao>Continuar com a entrega</Botao>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
