import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../styles'

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 62px 0;
`

export const Imagem = styled.div`
  width: 100%;
  height: 186px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
  font-weight: bold;
`

export const ListaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
`

export const Texto = styled.h3`
  font-size: 18px;
  font-weight: 900;
  margin: 0;

  &:hover {
    cursor: pointer;
  }
`

export const StyleLink = styled(Link)`
  font-size: 18px;
  font-weight: 900;
  margin: 0;
  text-decoration: none;
  color: ${cores.corPrincipal};
`
