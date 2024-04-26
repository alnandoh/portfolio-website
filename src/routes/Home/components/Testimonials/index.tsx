import "./style.css"
import testimonial1 from "../../../../assets/testimonial1.png"
import testimonial2 from "../../../../assets/testimonial2.png"

const Testimonials = () => {
  return (
    <section className="container page-grid">
      <div>
        <h2>Testimonials</h2>
      </div>
      <div className="testimonial-card-container">
        <div className="testimonial-card">
          <div className="testimonial-text">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”
          </div>
          <div className="reviewer">
            <img src={testimonial1} alt="Reviewer 1 Photo" />
            <div className="reviewer-body">
              <div className="reviewer-name">Ayush Raj</div>
              <div className="reviewer-job">VP of marketing @Webflow</div>
            </div>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-text">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”
          </div>
          <div className="reviewer">
            <img src={testimonial2} alt="Reviewer 2 Photo" />
            <div className="reviewer-body">
              <div className="reviewer-name">Alex Cattoni</div>
              <div className="reviewer-job">Founder @CopyPossy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials