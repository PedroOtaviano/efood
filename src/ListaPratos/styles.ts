import styled from 'styled-components'
import { cores } from '../styles'

export const ListaContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
  max-width: 1024px;
  width: 100%;
  margin-top: 16px;
  margin-left: 170px;
  margin-right: 170px;
  margin-bottom: 100px;
`

export const Modal = styled.div`
  position: fixed;
  top: 200px;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1001;
  display: block;
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
  height: 100%;
  width: 100%;

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    img {
      width: 100%;
      height: auto;
    }
  }
`

export const ModalTexto = styled.div`
  width: 100%;
  padding: 0 32px 32px 32px;
  display: block;

  h4 {
    margin-bottom: 16px;
    font-size: 18px;
    font-weight: bold;
  }

  button {
    font-size: 14px;
    font-weight: bold;
    border: none;
    padding: 4px 7px;
    width: 218px;
    height: 24px;
    margin-top: 16px;
  }

  @media (max-width: 768px) {
    width: 100%;
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

export const ContainerModal = styled.div`
  max-width: 1024px;
  width: 1024px;
  margin: auto;
  background-color: ${cores.corPrincipal};
  overflow: hidden;
  display: block;
  flex-direction: column;
  position: relative;
  color: ${cores.fundoBranco};
  padding: 32px;

  @media (max-width: 768px) {
    aspect-ratio: auto;
    width: 95vw;
    display: flex;
  }
`
