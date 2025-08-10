import styled from 'styled-components'
import { cores } from '../styles'

export const CardContainer = styled.div`
  background-color: ${cores.corPrincipal};
  color: ${cores.fundoRodape};
  padding: 8px;
  width: 320px;
  height: 338px;
  display: block;

  img {
    display: block;
    width: 304px;
    height: 167px;
    object-fit: cover;
  }
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
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d64545;
    color: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
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
