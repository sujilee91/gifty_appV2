import Link from 'next/link'
import Image from 'next/image'

import App from '../components/App'
import '../styles/global.css'
import { Sidebar, HeaderWrapper, Button } from '../styles/styles'

import logo from '../img/fullLogo.png'
const Main = () => {
  return (
    <div>
      <Sidebar>
        <Image src={logo} width={80} />
        <HeaderWrapper>
          <ul>
            <li>
              <Link href={'/groups'}>Groups</Link>
            </li>
            <li>
              <Link href={'/wishlist'}>Wishlist</Link>
            </li>
            <li>
              <Link href={'/friends'}>Friends</Link>
            </li>
            <li>
              <Link href={'/profile'}>Profile</Link>
            </li>
          </ul>
          {/* <h3>Hi, {currentUser?.name}!</h3> */}
          <Button onClick={() => onLogout()} primary>
            Logout
          </Button>
        </HeaderWrapper>
      </Sidebar>
      <App />
    </div>
  )
}

export default Main
