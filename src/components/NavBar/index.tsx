import "./style.css"
const NavBar = () => {
  return (
    <header>
      <a href="/" className="logo">@Alnando_Harsono</a>
      <div className="navbar">
        <a href="/#about">About</a>
        <a href="/#work">Work</a>
        <a href="/contact">Contact</a>
      </div>
    </header>
  )
}

export default NavBar