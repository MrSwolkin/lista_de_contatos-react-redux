import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import ContatoClass from '../../models/Contato'
import * as S from './styles'

import { editar, remover } from '../../store/recucers/contatos'

type Props = ContatoClass

const Contato = ({
  id,
  nome: nomeOriginal,
  telefone: telefoneOriginal,
  email: emailOriginal
}: Props) => {
  const dispatch = useDispatch()

  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  const [estaEditando, setEstaEditando] = useState(false)

  useEffect(() => {
    if (
      nomeOriginal.length > 0 &&
      telefoneOriginal.length > 0 &&
      emailOriginal.length > 0
    ) {
      setNome(nomeOriginal)
      setTelefone(telefoneOriginal)
      setEmail(emailOriginal)
    }
  }, [nomeOriginal, telefoneOriginal, emailOriginal])

  function cancelaEdicao() {
    setEstaEditando(false)
    setNome(nomeOriginal)
    setTelefone(telefoneOriginal)
    setEmail(emailOriginal)
  }

  return (
    <S.Card>
      <ul>
        <label>
          {' '}
          Nome:
          <S.Nome
            disabled={!estaEditando}
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
        <label>
          {' '}
          Telefone:
          <S.Dados
            disabled={!estaEditando}
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </label>
        <label>
          Email:
          <S.Dados
            disabled={!estaEditando}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </ul>
      <S.ContainersBotoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar
              onClick={() => {
                dispatch(editar({ nome, telefone, email, id }))
                setEstaEditando(false)
              }}
            >
              Salvar
            </S.BotaoSalvar>
            <S.BotaoRemoverECancelar onClick={cancelaEdicao}>
              Cancelar
            </S.BotaoRemoverECancelar>
          </>
        ) : (
          <>
            <S.BotaoEditar onClick={() => [setEstaEditando(true)]}>
              editar
            </S.BotaoEditar>
            <S.BotaoRemoverECancelar onClick={() => dispatch(remover(id))}>
              remover
            </S.BotaoRemoverECancelar>
          </>
        )}
      </S.ContainersBotoes>
    </S.Card>
  )
}

export default Contato
