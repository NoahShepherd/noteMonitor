
const Badge = (arg)=>{
    const serverName = arg.name||"server"
    const countAP = arg.ap ||0
    return (<>
        <button type="button" className="btn btn-primary position-relative">
            {serverName}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {countAP}
                <span className="visually-hidden">unread messages</span>
            </span>
        </button>
    </>)
}

export default Badge