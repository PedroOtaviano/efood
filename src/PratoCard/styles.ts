import styled from 'styled-components'
import { cores } from '../styles'

export const CardContainer = styled.div`
  background-color: ${cores.corPrincipal};
  color: ${cores.fundoRodape};
  padding: 8px;
  width: 320px;
  height: 338px;
  display: block;
`
export const Botao = styled.button`
  background-color: ${cores.fundoRodape};
  color: ${cores.corPrincipal};
  width: 100%;
  font-size: 14px;
  font-weight: 700;
  padding: 4px 84px;
  border: none;
  text-align: center;
`

export const CardTitulo = styled.h3`
  margin: 8px 0;
  font-size: 16px;
  font-weight: 900;
`

export const Cardtexto = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 8px;
`
