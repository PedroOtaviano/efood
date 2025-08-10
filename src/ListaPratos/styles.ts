import styled from 'styled-components'
import { cores } from '../styles'

export const ListaContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
  max-width: 1200px;
  width: 100%;
  margin-top: 16px;
  margin-left: 170px;
  margin-right: 170px;
  margin-bottom: 100px;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1001;
  margin-top: 150px;
`

export const ModalHeader = styled.header`
  position: absolute;
  top: 8px;
  right: 8px;
  margin-bottom: 8px;

  > img {
    cursor: pointer;
  }
`
export const ModalContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: 16px;
  margin-top: 16px;

  img {
    width: 280px;
    height: 280px;
  }
`

export const ModalTexto = styled.div`
  h4 {
    margin-bottom: 16px;
    font-size: 18px;
    font-weight: bold;
  }
  button {
    background-color: ${cores.tag};
    color: ${cores.corPrincipal};
    border: none;
    font-size: 14px;
    align-items: center;
    padding: 8px;
    margin-top: 16px;
  }
`

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`
