import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { Form, Campo } from './styled'
import { cadastrar } from '../../store/recucers/contatos'
import Contato from '../../models/Contato'
import { BotaoEditar } from '../../components/Contato/styles'

const Formulario = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  const CadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    const contatoParaAdicionar = new Contato(nome, telefone, email, 9)

    dispatch(cadastrar(contatoParaAdicionar))
    navigate('/')
  }

  return (
    <>
      <h1>Novo Contato</h1>
      <Form onSubmit={CadastrarContato}>
        <Campo
          value={nome}
          onChange={({ target }) => setNome(target.value)}
          type="text"
          placeholder="Nome"
        />
        <Campo
          value={telefone}
          onChange={({ target }) => setTelefone(target.value)}
          type="number"
          placeholder="Telefone"
        />
        <Campo
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="text"
          placeholder="Email"
        />
        <BotaoEditar type="submit"> Cadastrar </BotaoEditar>
      </Form>
    </>
  )
}

export default Formulario
