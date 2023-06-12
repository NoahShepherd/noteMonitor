import { child, get, getDatabase, ref, set } from "firebase/database";
import {Success,Error, apiError, apiSuccess} from './status'
import app from "./firebaseConnect"
import { Db } from "mongodb";
app.automaticDataCollectionEnabled=true

const readData =async (path:string):Promise<Success|Error>=>{
    try{
        const db = getDatabase();
        const dbRef = ref(db)
        let rep:Success = apiSuccess(null,null);
        console.log(path)
        await get(child(dbRef, path)).then(e=>{
            if (e.exists()) {
                rep.data = e.val()
                rep.msg = e
                
              } else {
                return apiError("404","Path can't find.","Path can't find.","readData:Get")
              }
        }).catch((error) => {
            return apiError("500",error,error,"readData:Get")
        });
        return rep 
    }catch(err){
        return apiError("500",err,err,"readData")
    }

}
// read mongo db
const readData_mongo = async (database:Db,path:string,arr:{[x:string]:any}[])=>{
    try{
      const collection = database.collection(path);
      let rep:Success = apiSuccess("done","")
      rep.data = await collection.find().toArray();
      return rep
    }catch(err){
      return apiError("400",err,err,"insertData")
    }
}
export default readData