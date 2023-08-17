import Footer from '@/components/footer'
import Menu from '@/components/menu/menu'
import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Menu/>
        <Main />
        <Footer/>
        <NextScript />
      </body>
    </Html>
  )
}