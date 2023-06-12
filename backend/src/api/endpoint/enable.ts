import fastify from "./common"
import readData from "../../../dbconnect/read"
import { EditNoteReq } from "../../type/editReq"
import insertData from "../../../dbconnect/create"

const enable = (path:string) =>{

    fastify.post(path,async (req,rep)=>{
        const request:any = req.body
        const pathUrl = {
            host:request.host,
            AP:[],
            DSP:[],
            Enable:true,
            content:[]
        }
        // record history 
        await insertData("history/0",pathUrl.content)

        // change runtime table enable flag to True
        const result =await insertData(pathUrl.host,pathUrl.content)

        // tannel api check ap did not open up

        // tannel api open ksh enable  

        // tannel api open ap
         
        rep.send(result)
    })
    // post the new edit note
}
export default enable