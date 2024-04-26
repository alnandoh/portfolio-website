import "./style.css"
import footerPP from "../../assets/footer-pp.png"

const Footer = () => {
  return (
    <footer>
      <div className="footer-top-container">
        <div className="footer-headline">
          Have something in mind?<br />
          <img src={footerPP} alt="Footer Profile Picture" /> let's build it together
        </div>
        <a href="/contact" className="contact-button">
          Get in touch
        </a>
      </div>
      <div className="footer-bottom-container">
        <div className="build-with">Build with 💖 by Brightscout & Ayush
        </div>
        <div className="social-media-handler">
        <a href="/">LinkedIn</a>
        <a href="/">Twitter</a>
        <a href="/">Instagram</a>
        <a href="/">Webflow</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer