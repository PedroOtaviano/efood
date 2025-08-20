import styled from 'styled-components'
import { cores } from '../styles'
import { Form } from 'formik'

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
  width: 360px;
  height: 100vh;
  overflow-y: auto;

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

export const Lixeira = styled.button`
  border: none;
  background-color: ${cores.fundoRodape};
  position: absolute;
  bottom: 8px;
  right: 8px;
  z-index: 1;

  &:hover {
    cursor: pointer;
  }
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

export const StyleForm = styled.div`
  h3 {
    font-size: 16px;
    font-weight: bold;
    line-height: 100%;
    margin-bottom: 16px;
  }

  label {
    font-size: 14px;
    font-weight: bold;
    line-height: 100%;
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    box-sizing: border-box;
    height: 32px;
    padding: 8px;
    color: #4b4b4b;
    font-size: 14px;
    font-weight: bold;
    background-color: ${cores.fundoRodape};
    border: none;
  }

  button {
    display: inline-block;
    margin-bottom: 8px;
    margin-top: 16px;
    white-space: nowrap;
  }

  button:last-child {
    margin-top: 8px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    color: ${cores.fundoRodape};
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;

  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
    flex: 1;
    margin-right: 34px;
  }

  > div:last-child {
    margin-right: 0;
  }
`

export const CardRow = styled.div`
  display: flex;
  flex-direction: row;

  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
  }

  > div:first-child {
    flex: 2;
    margin-right: 34px;
  }

  > div:last-child {
    flex: 1;
    margin-right: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end; // Alinha tudo à direita
  }

  > div:last-child label {
    align-self: flex-start; // Mantém a label à esquerda
    width: 100%;
  }

  input[name='cvv'] {
    width: 100px;
    min-width: 100px;
    max-width: 100px;
    margin-left: 0;
  }
`
