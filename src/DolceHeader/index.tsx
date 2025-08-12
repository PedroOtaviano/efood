import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import logo from '../assets/images/logo.svg'
import imagemFundo from '../assets/images/header.png'
import {
  HeaderContainer,
  Imagem,
  ListaContainer,
  Texto,
  StyleLink
} from './styles'

import { open } from '../store/reducers/cart'
import { RootReducer } from '../store'

const DolceHeader = () => {
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  const { items } = useSelector((state: RootReducer) => state.cart)

  return (
    <Imagem style={{ backgroundImage: `url(${imagemFundo})` }}>
      <HeaderContainer>
        <ListaContainer>
          <StyleLink to="/">Restaurantes</StyleLink>
          <Link to={'/'}>
            <img src={logo} alt="Efood logo" />
          </Link>
          <Texto onClick={openCart}>
            {items.length} produto(s) no carrinho
          </Texto>
        </ListaContainer>
      </HeaderContainer>
    </Imagem>
  )
}

export default DolceHeader
