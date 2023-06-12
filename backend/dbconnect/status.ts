type Success = {
    status:200
    data: any
    msg:any
}

type Error = {
    status: string
    data:any
    msg:any
    path:string
}

const apiSuccess = (data:any,msg:any):Success=>{
    return {
        status:200,
        data,
        msg
    }
}
const apiError = (status:string,data:any,msg:any,path:string):Error=>{
    return {
        status,
        data,
        msg,
        path
    }
}
export {Success,Error,apiError,apiSuccess}