import { Imagem, SubTitulo } from './styles'
import dolceFundo from '../assets/images/dolce_fundo.png'

const DolceBanner = () => {
  return (
    <Imagem style={{ backgroundImage: `url(${dolceFundo})` }}>
      <SubTitulo>Italiana</SubTitulo>
      <h2>LaDolce Vita Trattoria</h2>
    </Imagem>
  )
}

export default DolceBanner
