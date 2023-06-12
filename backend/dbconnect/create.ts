


import { getDatabase, ref, set } from "firebase/database";
import app from "./firebaseConnect"
import {Success,Error, apiError, apiSuccess} from './status'
import { Db } from "mongodb";
app.automaticDataCollectionEnabled=true

// firebase
const insertData =async (path:string,arr:{[x:string]:any}[]):Promise<Success|Error>=>{
  try{
    const db = getDatabase();
    let rep:Success = apiSuccess("done","")

    arr.forEach(async e=>{
      let post = path+(e["Path"]||"")
      rep.msg =await set(ref(db, post),e);
    })

    return rep
  }catch(err){
    return apiError("400",err,err,"insertData")
  }
}
// mongodb create
const insertData_mongo = async (database:Db,path:string,arr:{[x:string]:any}[])=>{
  try{
    const collection = database.collection(path);
    let rep:Success = apiSuccess("done","")
    arr.forEach(async e=>{
      let post = path+(e["Path"]||"")
      console.log(e,post)
      rep.msg =await collection.insertOne(e);
    })
    return rep
  }catch(err){
    return apiError("400",err,err,"insertData")
  }
}

export default insertData