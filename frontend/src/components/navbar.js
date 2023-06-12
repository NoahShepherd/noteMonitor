import "bootstrap/dist/css/bootstrap.min.css"
import ChildrenElement from "../utils/childrenElement"

const Navbar = (arg) => {

    const childrens = [arg]
    const controller = ChildrenElement(childrens)

    return (<>
        <nav className="navbar navbar-expand-sm p-4">
            <div className="container-fluid">
                <div className="h3" href="#">
                    {arg.logo}
                </div>
                <div className="h3">
                    {arg.title}
                </div>
                <div className="h3">
                    {
                        controller.content.content
                    }
                </div>
            </div>
        </nav>
    </>)
}

export default Navbar