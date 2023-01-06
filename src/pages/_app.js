import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import '../styles/global.css'
import { Sidebar, HeaderWrapper, Button } from '../styles/styles'

import logo from '../img/fullLogo.png'

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,500,700|Montserrat:300,500,700|Poppins:300,500,700"
        />
        <title>Gifty - Share your love, share your gift</title>
      </Head>

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
      <Component {...pageProps} />
    </div>
  )
}
