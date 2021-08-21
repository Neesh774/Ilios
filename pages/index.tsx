import type { NextPage } from 'next'
import MetaTags from '../components/MetaTags'
import NavBar from '../components/NavBar'
const Home: NextPage = () => {
  return (
    <>
      <MetaTags/> 
      <div>
        <NavBar/>
      </div>
    </>
  )
}

export default Home
