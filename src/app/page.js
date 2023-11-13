import Image from 'next/image'
import Header from './components/Header'
import Banner from './components/Banner'

export default function Home() {
  return (
    // <main className="flex">
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div style={{backgroundImage: `url('../../../images/banner.png')`}}>
      <Header/>
      <Banner/>
      </div>
    </main>
  )
}
