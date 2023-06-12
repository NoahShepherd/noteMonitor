import fastify from "./common"
import readData from "../../../dbconnect/read"
import { EditNoteReq } from "../../type/editReq"
import insertData from "../../../dbconnect/create"
import { currentTime } from "../../utils/time"

const editNote = (path:string) =>{
    // get database the latest record
    fastify.post(path,async (req,rep)=>{
        const request:any = req.body
        const pathUrl = {
            host:request.host
        }
        console.log(request.host)
        const result =await readData(pathUrl.host)
        rep.send(result)
    })
    
    fastify.post(path+"/content",async (req,rep)=>{
        const request:any = req.body
        const pathUrl = {
            host:request.host,
            content:request.content
        }
        
        pathUrl.content.map((e:any)=>{
            e.enable_Flag="N"
            e.editTime= currentTime()
            e.deployTime="null"
        })

        await insertData("history/0",pathUrl.content)
        const result =await insertData(pathUrl.host,pathUrl.content)
        rep.send(result)
    })
    // post the new edit note

}
export default editNote