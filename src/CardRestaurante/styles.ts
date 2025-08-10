import styled from 'styled-components'
import { cores } from '../styles'
import { Link } from 'react-router-dom'

export const CardContainer = styled.div`
  border-left: 1px solid ${cores.corPrincipal};
  border-right: 1px solid ${cores.corPrincipal};
  border-bottom: 1px solid ${cores.corPrincipal};
  border-top: none;
  background-color: ${cores.fundoBranco};
  width: 472px;
  height: 398px;
  padding-bottom: 8px;
  position: relative;

  > img {
    display: block;
    width: 100%;
    height: 217px;
    object-fit: cover;
  }
`
export const Texto = styled.p`
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 16px;
  font-weight: 400;
  font-size: 14px;
`

export const CardTitulo = styled.h3`
  margin-left: 8px;
  margin-right: 8px;
  margin-top: 8px;
  margin-bottom: 16px;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
`

export const CardLink = styled(Link)`
  margin-left: 8px;
  padding: 4px 6px;
  background-color: ${cores.corPrincipal};
  color: ${cores.tag};
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c94c4c;
  }
`
export const TagsWrapper = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  z-index: 2;
`
