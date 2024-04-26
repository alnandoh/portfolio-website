import React from "react"
import "./sideStyle.css"
interface Props{
    isOpen:boolean;
    setIsOpen:(isOpen:boolean)=>void;
}

const SideMenu:React.FC<Props> = ({isOpen,setIsOpen}) => {
    return (
        <div onClick={()=>setIsOpen(!isOpen)} className={`side-nav ${isOpen && "open"}`}>
            <a href="/" className="side-nav-menu">Home</a>
            <a href="/#about" className="side-nav-menu">About</a>
            <a href="/#work" className="side-nav-menu">Work</a>
            <a href="/contact" className="side-nav-menu">Contact</a>
        </div>
    )
}

export default SideMenu