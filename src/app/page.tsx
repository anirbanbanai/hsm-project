import Image from 'next/image'
import LeftSideBar from './components/Sidebar'
import Home from "./components/Homes"

export default function Homes({ children }: { children: React.ReactNode }) {
  return (
   <main>
    <Home/>
   </main>
  )
}
