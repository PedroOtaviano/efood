import styled from 'styled-components'
import { cores } from '../styles'

export const RodapeContainer = styled.footer`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 0;
  background-color: ${cores.fundoRodape};
  width: 100%;
  text-align: center;
  margin-top: auto;
`

export const Logo = styled.img`
  margin-bottom: 32px;
`

export const RedesSociais = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
  margin-bottom: 80px;
`
export const Texto = styled.p`
  font-size: 10px;
`
