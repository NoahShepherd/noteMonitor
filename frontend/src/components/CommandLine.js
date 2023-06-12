import React, {  useRef, useState } from 'react';
import ChildrenElement from '../utils/childrenElement';

const Command = (arg) =>{
    // textarea
    // const textRef = useRef(null)
    // const textToCopy = textRef.current.value;
    const [deployContent,_]= useState(arg.content||"")
    const [copyBtn,HideController] = useState(false)
    const commandLine = arg.children || []
    
    const copyContent = e =>{
        navigator.clipboard.writeText(deployContent)
    }
    const showCopyBtn = e =>{
        HideController(true)
    }
    const hideCopyBtn = e =>{
        HideController(false)
    }
    const editStyle = {
        height: `${arg.size||"70"}vh`,
        border: '2px solid grey',
    }
    
    const editTextArea = "card text-white bg-transparent p-2 overflow-auto"
    const editRow = "col-md-12 col-lg-12 p-2"
    const copyBtnOpacity = `badge bg-success position-absolute end-0 ${copyBtn?"easyIn":"easyOut"}` 
    return (<>
        <div className={editRow}>
            <div style={editStyle} className={editTextArea} onClick={copyContent} onMouseOver={showCopyBtn} onMouseLeave={hideCopyBtn}>
                <h5 className='sticky-top'>
                    <button className={copyBtnOpacity}>
                        COPY
                    </button>
                </h5>
                <code>
                    <h5>
                        {
                            deployContent
                        }
                    </h5>
                </code>
                <hr/>
                
                {
                    commandLine
                }
            </div>
        </div>
    </>)
}

export default Command