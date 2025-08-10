import { CardContainer, Botao, CardTitulo, Cardtexto } from './styles'

type Props = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
  onAddClick: () => void
}

const PratoCard = ({
  foto,
  preco,
  id,
  nome,
  descricao,
  porcao,
  onAddClick
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 158) {
      return descricao.slice(0, 155) + '...'
    }
    return descricao
  }

  return (
    <CardContainer>
      <img src={foto} alt="Marguerita" />
      <CardTitulo>{nome}</CardTitulo>
      <Cardtexto>
        {getDescricao(descricao)} <br />
        Serve: {porcao}
      </Cardtexto>
      <Botao onClick={onAddClick}>Mais detalhes</Botao>
    </CardContainer>
  )
}

export default PratoCard
