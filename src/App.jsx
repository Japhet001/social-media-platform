// import Room from './room-homepage-master/Room'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Categories from "./components/Categories"
import Sidebar from "./components/Sidebar"
import IdeaLayout from "./homePages/IdeaLayout"
import "./styles.scss"
import { useContext, useEffect, useState } from "react"
import Home from "./homePages/Home"
import Register from "./homePages/Register"
import ReadMore from "./homePages/ReadMore"
import UpdateIdea from "./components/UpdateIdea"
import Welcome from "./components/Welcome"
import { Context } from "./context/userContext"
import Profile from "./components/Profile"
import UserPage from "./components/UserPage"
import Message from "./components/Message"



function App() {
  const [toggleLogin, setToggleLogin] = useState(false)
  const [toggleShow, setToggleShow] = useState(false)
  const {user} = useContext(Context)
  const [tyme, setTyme] =useState(new Date().toLocaleTimeString())
  useEffect(()=>{
    setInterval(() => {
      setTyme((t)=> t = new Date().toLocaleTimeString())
    }, 1000);
  }, [])
  return (
    <BrowserRouter>
    {user?.token ? <Welcome setToggleShow={setToggleShow}/>  :  null}
    <div id="root_intro"><h1>Welcome to Instagram App! </h1><span>{tyme.split(":")[0] >= 12 && tyme.split(":")[0] >=1 ? `${tyme} PM` :`${tyme} AM` }</span></div>
      <Sidebar setToggleLogin={setToggleLogin}/>
      <Routes>
        <Route path="/login" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/userpage" element={<UserPage />} />
        <Route path="/" element={<Register />}/>
        <Route path="/Message" element={<Message />}/>
        <Route path="/app" element={<IdeaLayout/>}>
          <Route path="/app/readmore" element={<ReadMore />} />
          <Route path="/app/update" element={<UpdateIdea />} />
        </Route>
      </Routes>
      <Categories /> 
    </BrowserRouter>
  )
}

export default App
