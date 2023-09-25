import { createGlobalStyle, styled } from 'styled-components'
const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    body {
      background-image: linear-gradient(to bottom, #bdc3c7, #203A43, #2C5364);
      height: 100vh;
    }
  }
`
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 24px auto;
  padding: 24px 16px;

  display: grid;
  grid-template-columns: 360px auto;
  justify-content: start;
`
export const Bloco1 = styled.div`
  width: 100%;
`
export const Bloco2 = styled.div`
  width: 100%;
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`
export default EstiloGlobal
