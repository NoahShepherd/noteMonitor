import React, {  useState } from 'react';

const EditTextArea = (arg) =>{

    const textAreaHeight = arg.size || "45vh"
    const [editContent,GeteditContent]= useState(arg.content||"")
    
    const handleChange = event =>{
        GeteditContent(event.target.value);
    }
    const clearContent = event =>{
        GeteditContent("");
    }
    const editStyle = {
        height: textAreaHeight
    }
    const editTextArea = "p-t-5 text-white bg-transparent card h-100 w-100"

    const readOnly = arg.readOnly||""

    const editRow = "col-md-12 col-lg-12 p-2"
    const saveBtn = "btn btn-success"
    const clearBtn = "btn btn-danger"

    return (<>
        {
        readOnly?<></>:
            <div className={editRow} >
                <div className='float-end'>
                    <button type="button" className={saveBtn} >Save</button>
                    <button type="button" className={clearBtn} onClick={clearContent}>clear</button>
                </div>
            </div>
        }
        <div className={editRow}>
            <div style={editStyle}>
                <textarea className={editTextArea} value={editContent} onChange={handleChange} readOnly={readOnly}/>
            </div>
        </div>
    </>)
}

export default EditTextArea