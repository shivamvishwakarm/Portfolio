import Navbar from '@/components/Nav'
import Header from '@/components/Header'
import Project from '@/components/Project'
import { Skill } from '@/components/Skill'


export default function Home() {
  return (
    <main className='flex overflow-hidden	'>
    <Navbar />
    <div className='flex flex-wrap  text-white lg:pl-44 ' >
    <Header />
    <Project/>
    <Skill/>
    </div>

    </main>
  )
}
