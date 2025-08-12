import { ReactElement } from 'react'
import { StyleConteudo } from './styles'

type ConteudoProps = {
  children?: ReactElement
}

const Conteudo = ({ children }: ConteudoProps) => {
  return <StyleConteudo>{children}</StyleConteudo>
}

export default Conteudo
