
const LoadingProgress = (arg) =>{

    const backgroundRect = `opacity-50 bg-dark position-absolute top-0 start-0 h-100 w-100`
    const iconLoading = "spinner-border spinner-border-sm"
    const btnPosition =`top-50 start-50 translate-middle position-absolute btn w-20` 
    let btnColor,text='';
    switch(arg.isSuccess){
        case 1:
            btnColor = "btn-success"
            text="Deploy is success done.."
            break
        case 2:
            btnColor = "btn-danger"
            text="Deploy is error.."
            break
        default:
            btnColor = "btn-warning"
            text="Deploy is loading..."
            break
    }
    
    return (<>
        <div className={backgroundRect}/>
            <button className={`${btnPosition} ${btnColor}`} type="button" disabled>
            <span className={iconLoading}></span>
            <span className="p-2">{text}</span>
        </button>
    </>)
}


export default LoadingProgress