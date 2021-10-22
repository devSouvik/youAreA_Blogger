import FrontPageBody from "../components/FrontPageBody"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import classes from "./FrontPage.module.css"



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
