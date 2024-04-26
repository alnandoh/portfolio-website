import "./style.css"
import NavBar from "../../components/NavBar"
import Sidebar from "../../components/Sidebar"
import Footer from "../../components/Footer"

const Contact = () => {
  return (
    <div>
      <NavBar/>
      <div className="contact container">
        <div className="contact-card">
          <div className="self-portrait-container">
            <div className="self-portrait"></div>
          </div>
          <div className="contact-headline">
            Let's build something cool together
          </div>
          <div className="contact-details">
            <div className="contact-details-title">
              Contact Details
            </div>
            <div className="email">
              alnandoharsono@gmail.com
            </div>
            <div className="phone-number">
              +6289 605 743 240
            </div>
          </div>
        </div>
        <div className="contact-form">
          <div className="contact-group">
            <div className="input-title">
              Name
            </div>
            <input type="text" name="name" id="" placeholder="James Robert" />
          </div>
          <div className="contact-group">
            <div className="input-title">
              Email
            </div>
            <input type="email" name="email" id="" placeholder="Input your email" />
          </div>
          <div className="contact-group">
            <div className="input-title">
              Subject
            </div>
            <input type="text" name="subject" id="" placeholder="For web design work enquirements" />
          </div>
          <div className="contact-group">
            <div className="input-title">
              Message
            </div>
            <textarea name="message" cols={40} rows={5} placeholder="Type your message" className="message-area"></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </div>
      </div>
      <Sidebar/>
      <Footer/>
    </div>
  )
}

export default Contact