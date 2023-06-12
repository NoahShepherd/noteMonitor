import { v4 as uuidv4 } from 'uuid';

const SelectBar = ( arg )=>{
    const textColor = arg.textColor
    const value = arg.values
    console.log(value)
    return (<>
        <select className="form-select form-select-lg text-info bg-transparent">
            <option>Choose</option>
            {
                value.map((e)=>{
                    
                    return (
                        <option className={textColor} key={uuidv4()} value={e}>
                            {e}
                        </option>
                    )
                    
                })
            }
        </select>
    </>)
}

export default SelectBar