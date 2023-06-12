import React, { useEffect, useState } from 'react';
import { Get, Post } from '../api/common';
import noteReformatContent from '../utils/reformatContent';
import EditTextArea from '../components/editContent';

const EditPage=(arg)=>{
    console.log(arg)

    const [first,GetFirst] = useState(true)
    const [editContent,GeteditContent]= useState("")
    const [serverContent,GetServerContent]= useState("")
    
    useEffect(e=>{
        const getNote = async ()=>{
            if(first){
                const deployNote = await Get("http://localhost:8381/api/deploy")
                const editNote = await Post("http://localhost:8381/api/edit",{
                    Host:"Server"
                })
                console.log(editNote.data)
                if(deployNote.staus===200&& editNote.staus===200){
                    GeteditContent(noteReformatContent(editNote.data)||"")
                    GetServerContent(noteReformatContent(deployNote.data)||"")
                }
                GetFirst(false)
            }
        }
        getNote()
    },[first])

    const editRow = "col-md-12 col-lg-12 p-2"
    
    return (<>
        <div className="row">
            <EditTextArea content={editContent}/>
            <div className={editRow}>
                <p className='h5'>Server note</p>
                <hr/>
            </div>
            <div className={editRow}>
                <EditTextArea readOnly content={serverContent}/>
            </div>
        </div>
    </>)
}
export default EditPage