import { HostEnable } from "../../type/enableHost"
import fastify from "./common"


const checkEnable = (path:string) =>{
    // get database the latest record
    fastify.get(path,(req,rep)=>{
        // tannel api get route enable
        let result:HostEnable = {
            Host:"Server",
            Enable:true
        }
        rep.send(result)
    })
}
export default checkEnable