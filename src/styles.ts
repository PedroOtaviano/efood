import { createGlobalStyle } from 'styled-components'

export const cores = {
  fundoRodape: '#FFEBD9',
  fundoPrincipal: '#FFF8F2',
  corPrincipal: '#E66767',
  tag: '#FFEBD9',
  fundoBranco: '#FFFFFF'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    text-decoration: none;
    list-style: none;
  }

  body {
    background-color: ${cores.fundoPrincipal};
    color: ${cores.corPrincipal};
  }

  .containerModal{
    margin: 171px 490px;
    padding: 8px;
    background-color: ${cores.corPrincipal};
    color: ${cores.fundoBranco};
    display: flex;
    flex-direction: column;
    position: relative;
  }
`
