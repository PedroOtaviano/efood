import Conteudo from '../../Conteudo'
import Header from '../../Header'
import Rodape from '../../Rodape'
import { PaginaContainer } from './styles'
import ListaRestaurantes from '../../ListaRestaurantes'

function Home() {
  return (
    <PaginaContainer>
      <Header />
      <Conteudo>
        <ListaRestaurantes />
      </Conteudo>
      <Rodape />
    </PaginaContainer>
  )
}
export default Home
