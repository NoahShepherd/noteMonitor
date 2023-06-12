import insertData from "../../../dbconnect/create"
import { HostEnable } from "../../type/enableHost"
import fastify from "./common"


const deployNote = (path:string) =>{
    // get database the latest record
    fastify.get(path,async (req,rep)=>{
        // tannel api get current note

        let result = {
            Host:"server1",
            IP:"1.1.1.1,2.2.2.2",
            Ap:"AP1,AP2,AP3",
            Client:"XXX",
            TX_Name:"XXX"
        }
        
        rep.send(result)
    })
    fastify.post(path,async (req,rep)=>{
        // tannel api post the latest note
        const request:any = req.body
        const pathUrl = {
            host:request.host,
            content:request.content
        }
        await insertData("history/0",pathUrl.content)
        const result =await insertData(pathUrl.host,pathUrl.content)
        //tannel api create note to deploy

        rep.send(result)
    })
}
export default deployNote