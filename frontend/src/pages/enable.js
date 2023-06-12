import { useEffect, useState } from "react"
import Content from "../components/Content"
import Badge from "../components/badge"
import EditTextArea from "../components/editContent"

const EnablePage=(arg)=>{
    console.log(arg)
    const [first,GetFirst] = useState(true)
    const [noteContent,getNoteContent] = useState("")
    const enableRow = "col-md-12 col-lg-12 p-2"
    const enalbeBtn = "btn btn-info w-100"

    useEffect(e=>{
        //if(!arg.host)window.location.href="/"
        const getCMD = async ()=>{
            if(first){

                GetFirst(false)
                getNoteContent("")
            }
        }
        getCMD()
    },[first])
    

    return (<>  
        <div className="row">
            <Content content={noteContent} size="40" readOnly/>
            <div className={enableRow}>
                <hr/>
            </div>
            <div className="row" style={{height:"30vh"}}>
                <div className="col-4">
                    <Badge ap={10}></Badge>

                    <EditTextArea readOnly size="24vh" content={"asdf"}></EditTextArea>
                </div>
                <div className="col-4">
                <Badge ap={10}></Badge>
                    
                    <EditTextArea readOnly size="24vh" content={"asdf"}></EditTextArea>
                </div>
                <div className="col-4">
                <Badge ap={10}></Badge>
                    
                    <EditTextArea readOnly size="24vh" content={"asdf"}></EditTextArea>
                </div>
            </div>
            <div className={enableRow}>
                <button type="button" className={enalbeBtn}>Enable</button>
            </div>
        </div>
    </>)
}
export default EnablePage