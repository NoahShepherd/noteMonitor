
const Sidebar = (arg)=>{
    const value = arg.values || []
    return (
    <>
    <ul className="navbar-nav">
        <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
                <i className="bi bi-house-fill p-1"/>
                Home
            </a>
        </li>
        <hr/>
        <li className="nav-item">
            <a className="nav-link" href="/note/list">
                <i className="bi bi-list-columns-reverse p-1"/>
                List
            </a>
        </li>
        <hr/>
        <li className="nav-item">
            <a className="nav-link" href="/note/edit">
                <i className="bi bi-pencil-square p-1"/>
                Edit
            </a>
        </li>
        <hr/>
            <li className="nav-item">
                <a className="nav-link" href="/note/deploy">
                    <i className="bi bi-box p-1"/>
                    Deploy
                </a>
            </li>

            <hr/>
            <li className="nav-item">
                <a className="nav-link" href="/note/check">
                    <i className="bi bi-check2-square p-1"/>
                    Check
                </a>
            </li>
            
            <hr/>
            <li className="nav-item">
            <a className="nav-link" href="/note/enable">
                <i className="bi bi-pc-display p-1"/>
                Enable
            </a>
           </li>
           <hr/>
       </ul>
    </>)
}

export default Sidebar 