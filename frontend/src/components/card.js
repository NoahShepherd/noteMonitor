
const Card = (props) =>{
    const cardStyle = {
        backgroundColor:"#fffffa",
        textAlign: "left"
    }
    const click = e =>{
        console.log(e)
        window.location.href='/note/list?1'
    }
    return (
    <div className="col-md-3 p-3">
        <button className="card text-primary w-100 h-100" style={cardStyle} onClick={click}>
            <div className="card-body">
                <h3 className="card-title">
                    Server
                </h3>
                <h3 className="card-subtitle mb-3 text-muted ">
                    ACTIVE/RELEASE
                </h3>
                <p className="card-text">
                    who is in edit.
                </p>
                <hr className="text-muted"/>
                <p className="card-text">
                    who is in look.asdf
                </p>
                <h4>
                    <span className="badge bg-success position-absolute bottom-0 end-0">
                        EDIT
                    </span>
                </h4>
            </div>
        </button>
        <hr/>
    </div>)
}

export default Card