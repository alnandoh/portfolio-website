import arrow from "../../../../assets/arrow_forward.png"
interface WorkItemProps {
    name:string;
    roles:string[];
}

const WorkItem: React.FC<WorkItemProps> = ({name,roles}) => {
return (
    <>
        <div className="work-card">
            <div className="work-body">
                <div className="work-item">
                    <h3 className="work-title">{name}</h3>
                    <div className="work-categories">{roles.join(" - ")}</div>
                </div>
            </div>
            <a href="/" className="work-button">
                <img src={arrow} alt="Up Right Arrow" />
            </a>
        </div>
        <hr className="work"/>
    </>
    )
}

export default WorkItem