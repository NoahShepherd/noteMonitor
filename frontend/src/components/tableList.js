import { useState } from "react"

const TableList= (arg)=>{
    const [isHover,setHover] = useState(false)
    
    const mouseLeave = () =>{
        setHover(false)
    }
    const mouseOver = ()=>{
        setHover(true)
    }
    
    const defaultHead = [
        "Host",
        "EditTime",
        "DeployTime",
        "Enable_Flag",
        "AP",
        "Client",
        "Tx_Name",
        "DSP",
        "IP"
    ]
    const contents = arg.contents || [
        {
            "Host":"example",
            "EditTime":"2023-01-01",
            "DeployTime":"2023-01-01",
            "Enable_Flag":"True",
            "AP":"AP1",
            "Client":"Client",
            "Tx_Name":"Name",
            "DSP":"DSP",
            "IP":"0.0.0.0"
        }
    ]

    const style = {
        backgroundColor:isHover?"#177":""
    }
    
    return (<>
    <div className="table-responsive-xl">
    <table className="table text-white nowrap">
        <thead>
            <tr>
            <th >#</th>
            {
                defaultHead.map((e,i)=>{
                    return (<th key={"th_key_"+i}>{e}</th>)
                })
            }
            </tr>
        </thead>
        <tbody>
            {   
              contents.map((e,i)=>{
                const data = Object.keys(e)
                return (
                    <tr key={"tr_row_key_"+(i+1)} style={style} onMouseMove={mouseOver} onMouseLeave={mouseLeave}>
                        <th key={`tr_index_${i+1}`}>{i+1}</th>
                        {
                            data.map((k,j)=>{
                                return (
                                    <th key={`th_row_key_${i+1}_${j+1}`}>{e[k]}</th>
                                )
                            })
                        }
                    </tr>
                )
            })
            }
        </tbody>
    </table>
    </div>
    </>)
}
export default TableList