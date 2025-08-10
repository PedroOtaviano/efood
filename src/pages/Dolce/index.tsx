import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Conteudo from '../../Conteudo'
import DolceBanner from '../../DolceBanner'
import DolceHeader from '../../DolceHeader'
import ListaPratos from '../../ListaPratos'
import Rodape from '../../Rodape'
import { PaginaContainer } from '../Home/styles'
import { Restaurante } from '../../ListaRestaurantes'

const Dolce = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<Restaurante>()

  useEffect(() => {
    fetch(`https://ebac-fake-api.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])

  if (!restaurante) {
    return <h2>Carregando...</h2>
  }

  return (
    <PaginaContainer>
      <DolceHeader />
      <DolceBanner
        tipo={restaurante.tipo}
        titulo={restaurante.titulo}
        capa={restaurante.capa}
      />
      <Conteudo>
        <ListaPratos menu={restaurante.cardapio} />
      </Conteudo>
      <Rodape />
    </PaginaContainer>
  )
}

export default Dolce
