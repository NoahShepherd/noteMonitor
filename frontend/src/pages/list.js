import { useEffect, useState } from "react"
import TableList from "../components/tableList"
import { Get } from "../api/common"

const ListPage=(arg)=>{
    console.log(arg)
    
    const [first,GetFirst] = useState(true)
    const [historyContent,GetHistoryContent]= useState([])

    useEffect(async e=>{
        if(first){
            const result = await Get("http://localhost:8381/api/history")
            if(result.staus==200){
                GetHistoryContent(result.data||[])
            }
            GetFirst(false)
        }
    },[first])
    
    
    return (<>
        <TableList contents={historyContent}/>
    </>)
}
export default ListPage