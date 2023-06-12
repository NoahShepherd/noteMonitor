import "bootstrap/dist/css/bootstrap.min.css"
import ChildrenElement from "../utils/childrenElement"

const BackgroundColor=(...arg)=>{
    const controller =  ChildrenElement(arg)
    return (
    <div className="bg-dark text-info">
        {
            controller.content.content
        }
    </div>
    )
}

export default BackgroundColor