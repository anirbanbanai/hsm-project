import Image from 'next/image'
import LeftSideBar from '../components/Sidebar'
import Home from "../components/Homes"
import Navbar from '../components/Navbar'

export default function Homes({ children }: { children: React.ReactNode }) {
  return (
    <main>
      {/* <Navbar/> */}
      {children}
    </main>
  )
}
