import {Success,Error, apiError, apiSuccess} from './status'
import { Db } from "mongodb";

const updateData = async (database:Db,path:string,filter:any,update:any)=>{
    try{
      const collection = database.collection(path);
      let rep:Success = apiSuccess("done","")
      rep.data = await collection.updateOne(filter, { $set: update });
      return rep
    }catch(err){
      return apiError("400",err,err,"insertData")
    }
}

export {updateData}