import imagemBotao from '../../images/adicionar-contato.png'
import { AdicionaContato } from './styled'

const BotaoAdicionar = () => (
  <AdicionaContato to="/cadastro">
    <img src={imagemBotao} />
  </AdicionaContato>
)

export default BotaoAdicionar
