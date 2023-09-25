import styled from 'styled-components'

export const Card = styled.div`
  width: 350px;
  padding: 0 40px;

  display: block;
  box-shadow: 0px 4px 4px 0px #00000040;
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
  background-image: linear-gradient(to bottom, #dfe6e9, #b2bec3, #636e72);

  label {
    font-weight: bold;
  }
`

export const Nome = styled.textarea`
  width: 100%;
  font-size: 24px;
  font-weight: bold;
  margin: 4px;
  resize: none;
  background-color: transparent;
  border: none;
  border-radius: 6px;
  padding: 3px;
`

export const Dados = styled.textarea`
  width: 100%;
  margin: 4px;
  font-size: 16px;
  resize: none;
  border: none;
  background-color: transparent;
  border-radius: 6px;
  padding: 3px;
`

export const ContainersBotoes = styled.div`
  border-top: 2px solid black;
  padding-top: 16px;
`

export const BotaoEditar = styled.button`
  margin-left: 14px;
  padding: 6px;
  font-weight: bold;
  border-radius: 8px;
  box-shadow: 0px 4px 4px 0px #00000040;
`
export const BotaoSalvar = styled.button`
  margin-left: 14px;
  font-weight: bold;
  padding: 6px;
  border-radius: 8px;
`
export const BotaoRemoverECancelar = styled.button`
  margin-left: 14px;
  padding: 6px;
  font-weight: bold;
  border-radius: 8px;
  box-shadow: 0px 4px 4px 0px #00000040;
`
