import "./style.css"
import WorkItem from "./WorkItem"

const workItemList=[
  {
    name: "Decodable.co",
    roles:["Brand Design","Webflow Development","Web Design"]
  },
  {
    name: "Gofirefly.io",
    roles:["Brand Design","Webflow Development","Web Design"]
  },
  {
    name: "Blinkops.com",
    roles:["Brand Design","Webflow Development","Web Design"]
  },
  {
    name: "Withkanvas.com",
    roles:["Brand Design","Webflow Development","Web Design"]
  }
]

const Work = () => {
  return (
    <section className="container page-grid" id="work">
      <div>
        <h2>
          Recent Work
        </h2>
      </div>
      <div className="work-container">
        {workItemList.map((item) =>(
          <WorkItem name={item.name} roles={item.roles}/>
        ))}
      </div>
    </section>
  )
}

export default Work