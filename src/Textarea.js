import React ,{useState} from 'react'

export default function Textarea(props) {

    const[text,setText]= useState("")
    
    const applyThemeStyles = () => {
        if (props.mode === "dark") {
          document.body.style.backgroundColor = "#071037";
          // Apply other dark theme styles here
        } else {
          document.body.style.backgroundColor = "white";
          // Apply other light theme styles here
        }
      };
    
      // Apply theme styles when the component mounts
      applyThemeStyles();


    
    const upperCase=()=>{
        
           
        let newText = text.toUpperCase()
        setText(newText)
    }
    const lowerCase=()=>{
       if(text===""){
        alert("please enter some text")
       }else{
        let newText = text.toLocaleLowerCase()
        setText(newText)}
    }
    const reverse=()=>{
        // console.log("the button is going to clicked "+ text)
        let newText = text.split("").reverse().join("");

        setText(newText)
    }
    const cpt=()=>{
        // console.log("the button is going to clicked "+ text)
        const arr= text.split(" ");
        for(let i=0;i<arr.length;i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        const newText =arr.join(" ")
        setText(newText)
        }
    }
    const Clear=()=>{
      let newText= ""
      setText(newText)
    }
    const handleChange=(event)=>{
        console.log("on change")
        setText(event.target.value )
    }
    const copy=()=>{
         navigator.clipboard.writeText(text)
    alert("your text is copied")

    }
    
    const rmv=()=>{
        let newText = text.replace(/\s+/g,' ').trim();
        setText(newText)
    }
    const warn=()=>{
    if(text===""){
        b.innerText="please provide some text"
    }
        

        }
    let b =document.getElementById("p")

  return (
  <div>
  <h1 className={`text-${props.mode==="dark"?'white':'dark'}`}>{props.title}</h1>
<div className="mb-3">
  <textarea className="form-control"  onChange={handleChange} value={text} style={{backgroundColor:props.mode==="dark"?"black":'white',color:props.mode==="dark"?"white":'black'}} placeholder='Enter the text'  id="myBox" rows="8"></textarea>
  <p id='p'>{warn}</p>
</div>

<div className="container my-4"  >
    
<button className='btn btn-dark  mx-2'  disabled={text===""} id='btnn' onClick={upperCase}>Convert to upperCase</button>
<button className='btn btn-dark  mx-2' disabled={text===""} id='btnn' onClick={lowerCase}>Convert to lowerCase</button>
<button className='btn btn-dark  mx-2' disabled={text===""} id='btnn' onClick={reverse}>reverse a string</button>
<button className='btn btn-dark  mx-2' disabled={text===""} id='btnn' onClick={cpt}>capitilized first word</button>
<button className='btn btn-dark  mx-2' disabled={text===""} id='btnn' onClick={Clear}>clear</button>
<button className='btn btn-dark  mx-2' disabled={text===""} id='btnn' onClick={copy}>copy</button>
<button className='btn btn-dark  mx-2' disabled={text===""} id='btnn' onClick={rmv}>remove spaces</button>

<a href="/" download={text}> <button id='btnn'disabled={text===""} className='btn btn-dark "" mx-6' >download</button></a>
</div>
<div  className="container text-start card d-flex" style={{backgroundColor:props.mode==="dark"?"black":'white',color:props.mode==="dark"?"white":'black'}}>
    
    <h2 >Your text summary</h2>
    <p  > {text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} words and {text.trim(" ").length} charachters </p>
  
    <p>{0.008*text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length}-minutes to read && {(0.008*60)*text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length}-seconds to read </p>
    <h3 >Preview</h3>
    <p>{text.length>0?text:"Enter something to preview"}</p>
</div>
  </div>
  )
}
