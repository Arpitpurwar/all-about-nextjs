import './globals.css';
import { Poppins } from 'next/font/google';
import Header from './components/Header';


const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
});


export const metadata = {
  title: 'Personal Website',
  description: 'Prepared for NextJS 13 tutorial & courses',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className='container'>{children}</main>
      </body>
    </html>
  )
}
