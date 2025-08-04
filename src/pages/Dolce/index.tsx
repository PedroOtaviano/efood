import Conteudo from '../../Conteudo'
import DolceBanner from '../../DolceBanner'
import DolceHeader from '../../DolceHeader'
import ListaPratos from '../../ListaPratos'
import Rodape from '../../Rodape'
import { PaginaContainer } from '../Home/styles'

const Dolce = () => {
  return (
    <PaginaContainer>
      <DolceHeader />
      <DolceBanner />
      <Conteudo>
        <ListaPratos />
      </Conteudo>
      <Rodape />
    </PaginaContainer>
  )
}

export default Dolce
