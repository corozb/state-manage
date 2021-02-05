import {useState} from 'react'

export default function Slider({ onChange, min, max}) {
    const [value, setValue] = useState(1)
    console.log(value)

    return (
        <>
            <h1>{value}</h1>
            <input type='range' 
            min={min} 
            max={max} 
            onChange={(e) => {
                const value = +(e.target.value)
                onChange(value)
                setValue(value)
            }}/>
        </>
    )
}
