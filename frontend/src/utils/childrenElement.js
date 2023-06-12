import { useEffect, useState } from 'react';

const ChildrenElement = (arg)=>{
    const [content,setContent] = useState([])
    const [initialRender,setInitial] = useState(true)
    if(! (arg instanceof Array)){
        arg=[]
    }
    useEffect(()=>{
        if(initialRender){
            setContent(arg.map((e,index)=>{
                if(e.children){
                    return e.children
                }
            }))
            setInitial(false)
        }
    },[initialRender])
    return {content:{content,setContent},flag:{initialRender,setInitial}}
}
export default ChildrenElement