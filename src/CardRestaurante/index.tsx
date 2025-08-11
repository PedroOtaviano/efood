import imagemDolce from '../assets/images/la_dolce.png'
import estrela from '../assets/images/estrela.png'
import {
  CardContainer,
  CardLink,
  CardTitulo,
  Texto,
  TagsWrapper
} from './styles'
import Tag from '../Tag'
import { Menu } from '../ListaRestaurantes'

type Props = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Menu[]
}

const CardRestaurante = ({
  id,
  titulo,
  destacado,
  tipo,
  avaliacao,
  descricao,
  capa,
  cardapio
}: Props) => {
  return (
    <CardContainer>
      <TagsWrapper>
        {destacado && <Tag>Destaque da semana</Tag>}
        <Tag>{tipo}</Tag>
      </TagsWrapper>

      <img src={capa} alt="Foto restaurante" />
      <CardTitulo>
        <h3>{titulo}</h3>
        <span>
          {avaliacao} <img src={estrela} alt="Estrela" />
        </span>
      </CardTitulo>
      <Texto>{descricao}</Texto>
      <CardLink to={`/Dolce/${id}`}>Saiba mais</CardLink>
    </CardContainer>
  )
}

export default CardRestaurante
