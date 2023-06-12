import React, { useEffect, useState } from 'react';
import { Get, Post } from '../api/common';
import noteReformatContent from '../utils/reformatContent';
import EditTextArea from '../components/editContent';
import { v4 as uuidv4 } from 'uuid';

import Command from '../components/CommandLine';
import CommandInput from '../components/input';
import newLine2CodeELm from '../utils/splitNewLine';

const CheckPage=(arg)=>{

    const [first,GetFirst] = useState(true)
    const [cmdContent,AddCMDContent] = useState([])
    const [inputValue, setInputValue] = useState('');
    const [canInput,setCanInput] = useState(false)
    const host = arg.host 
    
    useEffect(e=>{
        //if(!arg.host)window.location.href="/"
        const getCMD = async ()=>{
            if(first){

                GetFirst(false)
                setCanInput(true)
            }
        }
        getCMD()
    },[first])
    const APIRequest =async cmd =>{
        const startTime = performance.now();
        setCanInput(false)
        
        // test api loading
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        (async () => {
            await sleep(10000); // Sleep for 2 seconds
            console.log('After sleep');
        })();

        const rep =await Post("http://localhost:8381/api/check",{
                    Host:"Server",
                    CMD:cmd
        })
        if(rep.staus===200){
            AddCMDContent(old=>[...old,"data"])
            setCanInput(true)
        }else{
            AddCMDContent(old=>[...old,"Error Reponse..."])
            setCanInput(true)
        }
    }
    const buttonClick = e=>{
        const line = newLine2CodeELm(`${host}: ${inputValue}`)
        AddCMDContent(old=>[...old,...line])
        APIRequest(inputValue)
        setInputValue("");
    }
    const inputKeydown= e=>{
        if (e.key === 'Enter') {
            const line = newLine2CodeELm(`${host}: ${inputValue}`)
            APIRequest(inputValue)
            AddCMDContent(old=>[...old,...line])
            setInputValue("");
        }
    }
    const handleInputChange = e => {
        setInputValue(e.target.value);
    };
    
    return (<>
        
        <div className="row">
            {/* pre */}
            {/* samp */}
            {/* code */}
            {/* var */}
            {/* <div className="progress">
                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "75%"}}></div>
            </div> */}
            <Command size="75" content={`Host server name: ${host}`}>
                {canInput?(<></>):
                (<>
                    <div className={`opacity-50 bg-dark position-absolute top-0 start-0 h-100 w-100`}/>
                    <button className="top-50 start-50 translate-middle position-absolute btn btn-danger w-20" type="button" disabled>
                        <span className="spinner-border spinner-border-sm"></span>
                        <span className="p-2">Loading...</span>
                    </button>
                </>)
                }
                {
                    cmdContent.map(e=>{
                        return (<code key={uuidv4()}>{e}</code>)
                    })
                }
                
            </Command>
            {
                
            }
            
            
            <CommandInput 
                ButtonFunction={buttonClick}
                InputFunction={inputKeydown}
                ValueChange={handleInputChange}
                value={inputValue}
                hidden={canInput?"easyIn":"easyOut"}
            />
            
        </div>
    </>)
}
export default CheckPage