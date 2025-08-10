import { useEffect, useState } from 'react'

import CardRestaurante from '../CardRestaurante'
import { ListaContainer } from './styles'

export type Menu = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Menu[]
}

const ListaRestaurantes = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://ebac-fake-api.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])
  return (
    <ListaContainer>
      {restaurantes.map((restaurante) => (
        <li key={restaurante.id}>
          <CardRestaurante
            id={restaurante.id}
            titulo={restaurante.titulo}
            destacado={restaurante.destacado}
            tipo={restaurante.tipo}
            avaliacao={restaurante.avaliacao}
            descricao={restaurante.descricao}
            capa={restaurante.capa}
            cardapio={restaurante.cardapio}
          />
        </li>
      ))}
    </ListaContainer>
  )
}

export default ListaRestaurantes
