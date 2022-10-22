import React from 'react'
import UserCard from '../../components/UserCard'
import DashGrid from '../../components/DashGrid'
import recieve from '../../img/recieve.png'
import sent from '../../img/sent.png'
import spent from '../../img/spent.png'

const dashList = [
  { name: 'Recieved Gifts', image: recieve },
  { name: 'Sent Gifts', image: sent },
]

const FAM = ['Dave', 'Diane', 'Connor', 'Cailey', 'Nino', 'SuJi', 'Lilly']

const App = () => {
  var userName = ''
  // if (localStorage.getItem('name')) {
  //   userName = localStorage.getItem('name')
  // } else {
  //   localStorage.setItem('name')
  // }

  return (
    <div className="App">
      <header className="App-header"></header>
      {}
      {FAM.map((fam) => {
        return (
          <div key={fam}>
            <UserCard user={fam} />
          </div>
        )
      })}

      {/* <DashGrid dashItems={dashList} /> */}
    </div>
  )
}

export default App
