import React, { useEffect, useState } from 'react';
import { Get, Post } from '../api/common';
import noteReformatContent from '../utils/reformatContent';
import EditTextArea from '../components/editContent';
import Content from '../components/Content';
import LoadingProgress from '../components/progress';

const DeployPage=(arg)=>{
    console.log(arg)

    const [first,GetFirst] = useState(true)
    const [editContent,GeteditContent]= useState("")
    const [deployTime,setDeployTime] = useState(false)
    const [successTime,setSuccessTime] = useState(false)

    const btnRow = "col-md-6"
    const EditBtn = "btn btn-info w-100"
    const DeployBtn = "btn btn-danger w-100"

    useEffect(e=>{
        const getNote = async ()=>{
            if(first){
                const editNote = await Post("http://localhost:8381/api/edit",{
                    Host:"Server"
                })
                console.log(editNote.data)
    
                if(editNote.staus==200){
                    GeteditContent(noteReformatContent(editNote.data)||"")
                }
                GetFirst(false)
                setDeployTime(true)
            }
        }
        getNote()
    },[first])

    const deployBtn = e => {
        setDeployTime(false)
        APIRequest()
    }
    const editBtn = e => {
        window.location.href = './edit'
    }

    const APIRequest =async e =>{
        // test api loading
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        (async () => {
            await sleep(10000); // Sleep for 2 seconds
            console.log('After sleep');
        })();

        const rep =await Post("http://localhost:8381/api/deploy",{
                    Host:"Server",
                    data:"data"
        })
        if(rep.staus===200){

            setSuccessTime(true)
            
            
            (async () => {
                await sleep(3000); // Sleep for 2 seconds
                setDeployTime(true)
            })();
        }else{

            setSuccessTime(true)

            const counter = async () => {
                await sleep(1000); // Sleep for 2 seconds
                setDeployTime(true)
            };
            await counter()
        }

    }

    return (<>
        <div className="row">
            <Content content={editContent} size="70" readOnly/>
            {
                deployTime?(<></>):
                    (successTime?
                        (<LoadingProgress isSuccess={1}></LoadingProgress>):
                        (<LoadingProgress isSuccess={0}></LoadingProgress>)
                    )
            }
            <div className={btnRow}>
                <button type="button" className={EditBtn} onClick={editBtn}>Edit</button>
            </div>
            <div className={btnRow}>
                <button type="button" className={DeployBtn} onClick={deployBtn}>Deploy</button>
            </div>
        </div>
    </>)
}
export default DeployPage