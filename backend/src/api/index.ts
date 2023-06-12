import checkEnable from "./endpoint/checkEnable";
import deployNote from "./endpoint/deploy";
import editNote from "./endpoint/edit";
import enable from "./endpoint/enable";
import history from "./endpoint/historyData";

export const endpointIndex =()=>{
    const api = "/api"
    
    editNote(`${api}/edit`)
    deployNote(`${api}/deploy`)
    checkEnable(`${api}/checkEnable`)
    enable(`${api}/enable`)
    history(`${api}/history`)
}


