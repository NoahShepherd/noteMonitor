const CommandInput = (arg) =>{
    // log txt for ui test
    const clickBtn=e=>{console.log("Components is not found,1")}
    const inputFunc=e=>{console.log("Components is not found,2")}
    const valueFunc=e=>{console.log("Components is not found,3")}
    
    const buttonClick = arg.ButtonFunction||clickBtn// null
    const inputKeydown=arg.InputFunction||inputFunc// null
    const valueChange = arg.ValueChange||valueFunc//null
    const inputValue = arg.value||""
    const hidden = arg.hidden || "easyIn"
    
    console.log("input Value,",inputValue)
    return (<>
        <div className={`input-group ${hidden}`}>
            <input className="rounded form-control border text-info bg-transparent" 
                    type="text" 
                    onKeyDown={inputKeydown}
                    onChange={valueChange}
                    value={inputValue}
            />
            <div className="input-group-append border text-info bg-transparent rounded">
                <button type="button" className={"btn"} onClick={buttonClick} >
                    <i className="bi bi-send-fill p-1"/>
                </button>
            </div>
        </div>
    </>)
}

export default CommandInput