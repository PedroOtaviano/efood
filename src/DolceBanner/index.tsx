import { Imagem, SubTitulo } from './styles'
import dolceFundo from '../assets/images/dolce_fundo.png'

type Props = {
  tipo: string
  capa: string
  titulo: string
}

const DolceBanner = ({ tipo, capa, titulo }: Props) => {
  return (
    <Imagem
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${capa})`
      }}
    >
      <SubTitulo>{tipo}</SubTitulo>
      <h2>{titulo}</h2>
    </Imagem>
  )
}

export default DolceBanner
