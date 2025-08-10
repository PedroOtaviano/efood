import styled from 'styled-components'
import { cores } from '../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
  padding-top: 25px;
  padding-left: 170px;
  color: ${cores.fundoBranco};
`

export const SubTitulo = styled.h3`
  font-size: 32px;
  font-weight: 100;
  margin-bottom: 157px;
`

export const TituloBanner = styled.h2`
  font-size: 32px;
  font-weight: 900;
`
