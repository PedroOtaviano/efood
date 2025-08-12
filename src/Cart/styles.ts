import styled from 'styled-components'
import { cores } from '../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.corPrincipal};
  color: ${cores.fundoRodape};
  z-index: 1;
  padding: 32px 8px 0 8px;

  p {
    font-size: 14px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    margin-bottom: 16px;
  }
`

export const CartItem = styled.li`
  background-color: ${cores.fundoRodape};
  color: ${cores.corPrincipal};
  padding: 8px 0 12px 8px;
  display: flex;
  position: relative;
  margin-bottom: 16px;

  > img {
    height: 80px;
    width: 80px;
    object-fit: cover;
  }
`

export const Lixeira = styled.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
`

export const TextItem = styled.div`
  margin-left: 8px;
  display: grid;
  gap: 16px;

  h3 {
    font-size: 18px;
    font-weight: 900;
  }
  span {
    font-size: 14px;
    font-weight: 400;
  }
`
