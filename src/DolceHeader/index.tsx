import { Link } from 'react-router-dom'

import logo from '../assets/images/logo.svg'
import imagemFundo from '../assets/images/header.png'
import {
  HeaderContainer,
  Imagem,
  ListaContainer,
  Texto,
  StyleLink
} from './styles'

const DolceHeader = () => {
  return (
    <Imagem style={{ backgroundImage: `url(${imagemFundo})` }}>
      <HeaderContainer>
        <ListaContainer>
          <StyleLink to="/">Restaurantes</StyleLink>
          <Link to={'/'}>
            <img src={logo} alt="Efood logo" />
          </Link>
          <Texto>0 produto(s) no carrinho</Texto>
        </ListaContainer>
      </HeaderContainer>
    </Imagem>
  )
}

export default DolceHeader
