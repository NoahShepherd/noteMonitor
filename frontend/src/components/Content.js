import React, {  useRef, useState } from 'react';

const Content = (arg) =>{
    // textarea
    // const textRef = useRef(null)
    // const textToCopy = textRef.current.value;
    const [deployContent,_]= useState(arg.content||"")
    const [copyBtn,HideController] = useState(false)

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
    
    const editTextArea = "card text-white bg-transparent overflow-auto p-2"
    const editRow = "col-md-12 col-lg-12 p-2"
    const copyBtnOpacity = `position-absolute end-0 badge bg-success ${copyBtn?"easyIn":"easyOut"}` 
    return (<>
        <div className={editRow}>
            <div style={editStyle} className={editTextArea} onClick={copyContent} onMouseOver={showCopyBtn} onMouseLeave={hideCopyBtn}>
                {
                    deployContent
                }
                <h5 className='sticky-top'>
                    <button className={copyBtnOpacity}>
                        COPY
                    </button>
                </h5>
            </div>
        </div>
    </>)
}

export default Content