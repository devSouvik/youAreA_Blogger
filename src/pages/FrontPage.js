import FrontPageBody from "../components/Landing_Page/FrontPageBody"
import Header from "../components/Landing_Page/Header"
import Navbar from "../components/Landing_Page/Navbar"
import "./FrontPage.module.css"



const FrontPage = () => {
  return (
   <main>
     <Navbar/>
     <Header />
     <FrontPageBody />
    
   </main>
  )
}

export default FrontPage
