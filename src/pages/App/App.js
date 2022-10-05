import UserCard from '../../components/UserCard'
import DashGrid from '../../components/DashGrid'
import recieve from '../../img/recieve.png'
import sent from '../../img/sent.png'
import spent from '../../img/spent.png'

const dashList = [
  { name: 'Recieved Gifts', image: recieve },
  { name: 'Sent Gifts', image: sent },
]

const App = () => {
  return (
    <div className="App">
      <header className="App-header"></header>
      <UserCard />
      <DashGrid dashItems={dashList} />
    </div>
  )
}

export default App
