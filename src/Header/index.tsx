import logo from '../assets/images/logo.svg'
import imagemFundo from '../assets/images/header.png'
import { HeaderContainer, Imagem, Titulo } from './styles'

const Header = () => {
  return (
    <Imagem style={{ backgroundImage: `url(${imagemFundo})` }}>
      <HeaderContainer>
        <img src={logo} alt="Efood logo" />
        <Titulo>
          Viva experiências gastronômicas <br /> no conforto da sua casa
        </Titulo>
      </HeaderContainer>
    </Imagem>
  )
}

export default Header
