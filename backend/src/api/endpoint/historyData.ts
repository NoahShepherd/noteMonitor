import fastify from "./common"
import readData from "../../../dbconnect/read"

const history = (path:string) =>{
    // get database the latest record
    fastify.get(path,async (req,rep)=>{
        const result =await readData("history")
        rep.send(result)
    })
}
export default history