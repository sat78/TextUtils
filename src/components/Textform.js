import React, { useState } from 'react'

export const Textform = (props) => {
    const [text, setText] = useState("")

    const handleUpClick = () => {
        let newtext = text.toUpperCase()
        setText(newtext)
    }
    const handleLoClick = () => {
        let newtext = text.toLowerCase()
        setText(newtext)
    }
    const handleClear = () => {
        let newtext = ""
        setText(newtext)
    }
    const handleOnChange = (e) => {
        setText(e.target.value)
    }
    return (
        <>
           <div className='container' style={{color:props.Mode==="dark"?"white":"black"}}>
            <h2>{props.heading}</h2>
            </div>
            <div>
                <div className="mb-3" style={{color:props.Mode==="dark"?"white":"black"}}>
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.Mode==="dark"?"grey":"white",color:props.Mode==="dark"?"white":"black"}} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>

            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-success mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className='btn btn-danger ' onClick={handleClear}>Clear Text</button>

            <div className='container my-3' style={{color:props.Mode==="dark"?"white":"black"}}>
                <h2>your text summary</h2>
                <p> { text.split(" ").length>1? text.split(" ").length-1:0} words and {text.length} characters </p>
                <p> {0.008* text.split("").length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text}</p>

            </div>
        </>

    )
}
