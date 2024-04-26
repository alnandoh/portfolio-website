import "./style.css"
import hand from "../../assets/hand.png"
import SideMenu from "./SideMenu"
import { useState } from "react"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <div onClick={() =>setIsOpen(!isOpen)} className="sidebar">
      <img src={hand} alt="Hand Icon" /> 
      <p>Hi, I'm <strong>Alnando</strong></p>
    </div>
    <SideMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
    </>
  )
}

export default Sidebar