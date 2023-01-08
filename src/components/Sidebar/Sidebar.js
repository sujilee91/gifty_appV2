import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../img/fullLogo.png'

import { Sidebar, HeaderWrapper, Button } from './styles'
const SidebarComponent = () => {
  return (
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
        <Button
          onClick={() => {
            localStorage.removeItem('code')
            window.location.reload()
          }}
          primary
        >
          Logout
        </Button>
      </HeaderWrapper>
    </Sidebar>
  )
}

export default SidebarComponent
