import imagemBotao from '../../images/326656_home_icon.png'
import { PaginaPrincial } from './styled'

const BotaoHome = () => (
  <PaginaPrincial to="/">
    <img src={imagemBotao} />
  </PaginaPrincial>
)

export default BotaoHome
