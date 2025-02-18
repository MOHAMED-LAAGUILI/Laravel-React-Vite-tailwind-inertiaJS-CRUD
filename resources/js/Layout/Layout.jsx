import { Header } from './Header'
import { Footer } from './Footer'
import { Toaster } from 'react-hot-toast';

export default function Layout({children}) {
  return (
    <>

    <Header/>

    <Toaster />

    <main className=" min-h-screen bg-gradient-to-br from-[#1e3c72] to-[#2a5298] dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
        {children}
    </main>

    <Footer/>
    </>
  )
}

 