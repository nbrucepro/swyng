import Image from 'next/image'
import Header from './components/Header'
import Banner from './components/Banner'
import Swyngmoney from './components/Swyngmoney'
import Swyngservices from './components/Swyngservices'

export default function Home() {
  return (
    // <main className="flex">
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
      <div >
      <div className='pb-20' style={{backgroundImage: `url('../../../images/banner.png')`}}>
      <Header/>
      <Banner/>
      </div>
        <Swyngmoney/>
        <Swyngservices/>
      </div>
    </main>
  )
}
