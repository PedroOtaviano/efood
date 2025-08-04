import logo from '../assets/images/logo.svg'
import { Logo, RedesSociais, RodapeContainer, Texto } from './styles'
import imgInstagram from '../assets/images/instagram.png'
import imgFacebook from '../assets/images/facebook.png'
import imgTwitter from '../assets/images/twitter.png'

const Rodape = () => {
  return (
    <RodapeContainer>
      <Logo src={logo} alt="Efood logo" />
      <RedesSociais>
        <img src={imgInstagram} alt="Instagram" />
        <img src={imgFacebook} alt="Facebook" />
        <img src={imgTwitter} alt="Twitter" />
      </RedesSociais>
      <Texto>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
        estabelecimento contratado.
      </Texto>
    </RodapeContainer>
  )
}

export default Rodape
