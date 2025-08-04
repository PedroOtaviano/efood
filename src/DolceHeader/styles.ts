import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../styles'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 62px 170px;
  width: 100%;
`

export const Imagem = styled.div`
  width: 100%;
  height: 186px;
  display: block;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
`

export const ListaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 32px;
`

export const Texto = styled.h3`
  font-size: 18px;
  font-weight: 900;
  margin: 0;
`

export const StyleLink = styled(Link)`
  font-size: 18px;
  font-weight: 900;
  margin: 0;
  text-decoration: none;
  color: ${cores.corPrincipal};
`
