import { Bloco1, Bloco2 } from '../../styles'
import ListaDeContatos from '../../containers/ListaDeContatos'
import Menu from '../../containers/Menu'
import Header from '../../containers/Header'

const Home = () => (
  <>
    <Bloco1>
      <Menu />
    </Bloco1>
    <Bloco2>
      <Header />
      <ListaDeContatos />
    </Bloco2>
  </>
)

export default Home
