import styled from 'styled-components'
import { cores } from '../styles'

export const TagContainer = styled.div`
  font-weight: bold;
  font-size: 12px;
  padding: 6px 12px;
  color: ${cores.tag};
  background-color: ${cores.corPrincipal};
  border-radius: 4px;
  display: inline-block;
`
