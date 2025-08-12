import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

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

const DolceHeader = () => {
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <Imagem style={{ backgroundImage: `url(${imagemFundo})` }}>
      <HeaderContainer>
        <ListaContainer>
          <StyleLink to="/">Restaurantes</StyleLink>
          <Link to={'/'}>
            <img src={logo} alt="Efood logo" />
          </Link>
          <Texto onClick={openCart}>0 produto(s) no carrinho</Texto>
        </ListaContainer>
      </HeaderContainer>
    </Imagem>
  )
}

export default DolceHeader
