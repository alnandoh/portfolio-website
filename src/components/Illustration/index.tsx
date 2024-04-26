import "./style.css"
import workImage1 from "../../assets/work-image1.png"
import workImage2 from "../../assets/work-image2.png"
import workImage3 from "../../assets/work-image3.png"
import workImage4 from "../../assets/work-image4.png"
import workImage5 from "../../assets/work-image5.png"
import workImage6 from "../../assets/work-image6.png"
import workImage7 from "../../assets/work-image7.png"
import workImage8 from "../../assets/work-image8.png"

const Illustration = () => {
  return (
    <section className="container illustration">
      <div className="img-row1">
        <div className="work-image-container">
          <img src={workImage1} alt="Work Image 1" />
        </div>
        <div className="work-image-container">
          <img src={workImage2} alt="Work Image 2" />
        </div>
        <div className="work-image-container">
          <img src={workImage3} alt="Work Image 3" />
        </div>
        <div className="work-image-container">
          <img src={workImage4} alt="Work Image 4" />
        </div>
      </div>
      <div className="img-row2">
        <div className="work-image-container">
          <img src={workImage5} alt="Work Image 5" />
        </div>
        <div className="work-image-container">
          <img src={workImage6} alt="Work Image 6" />
        </div>
        <div className="work-image-container">
          <img src={workImage7} alt="Work Image 7" />
        </div>
        <div className="work-image-container">
          <img src={workImage8} alt="Work Image 8" />
        </div>
      </div>
    </section>
  )
}

export default Illustration