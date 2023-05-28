import { useState } from "react";
import ModalViewer from "./Components/ModalViewer";
import InputBoxes from "./Components/InputBoxes";
import TextBox from "./Components/TextBox";
import Crums from "./Components/Crums";
import FileInput from "./Components/FileInput";

function App() {

  //modal handlers
  const [isOpen, setIsOpen] = useState(false)
  const [modalCancel, setModalCancel] = useState(false)
  const [modalOkay, setModalOkay] = useState(false)

  //input handlers
  const [inputValue, setInputValue] = useState("")
  const [redInput, setRedInput] = useState(false)
  const [greenInput, setGreenInput] = useState(false)

  //textarea handler
  const [textValue, setTextValue] = useState("")

  //file input handler
  const [file, setFile] = useState("")

  return (
    <>
      <div>
        <h3>Modal</h3>
        <ModalViewer isOpen={isOpen} setIsOpen={setIsOpen} header={"Header"} body={"Body"} disabledCancel={true} modalCancel={modalCancel} OnModalCancel={setModalCancel} disabledOkay={false} modalOkay={modalOkay} OnModalOkay={setModalOkay} /> 
        {/*
           disabledCancel: optional {default parameter is false},
           disabledOkay: optional {default parameter is false},
           you can pass any function in the OnModalCancel & OnModalOkay, in there is no function to be passed use a empty function
        */}
        <button onClick={e=>{setIsOpen(true); setModalCancel(false); setModalOkay(false)}} title="Open Modal">Open Modal</button>
        <p>modalCancel: {modalCancel+""} <br/> modalOkay:{modalOkay+""}</p>
      </div>

      <br/>
      <br/>

      <div>
        <h3>Input</h3>
        <InputBoxes inputValue={inputValue} setInputValue={setInputValue} type="" pattern="" required={true} redInput={redInput} greenInput={greenInput} readOnly={false} disabled={false} size={"larger"} placeholder="hi" clearable={true} startEnhancer="@" endEnhancer="@" width="" header="head" footer="foot" />
        {/* 
            type: optional {default: ""},
            pattern: optional {default: ""},
            required: optional {default: false},
            redInput: optional {default: false},
            greenInput: optional {default: false},
            readOnly: optional {default: false},
            diabled: optional {default: false},
            size: optional {default: default},
            placeholder: optional {default: ""},
            clearable: optional {default: false},
            startEnhancer: optional {default: ""},
            endEnhancer: optional {default: ""},
            width: optional {default: 18rem},
            header: optional {default: none},
            footer: optional {default: none},
        */}
        <button onClick={e=>{setRedInput(true);}} >Make Input Red</button>
        <button onClick={e=>{setGreenInput(false); setRedInput(false)}} >Set Default</button>
        <button onClick={e=>{setGreenInput(true);}} >Make Input Green</button>
        <p>{inputValue}</p>
      </div>

      <br/>
      <br/>
      
      <div>
        <h3>Textarea</h3>
        <TextBox textValue={textValue} setTextValue={setTextValue} required={true} redInput={redInput} greenInput={greenInput} readOnly={false} disabled={false} placeholder="hi" width="" header="head" footer="foot"/>
        <p>{textValue}</p>
      </div>

      <br/>
      <br/>
      
      <div>
        <h3>Breadcrums</h3>
        <Crums crum={['Home', 'Dashboard']}/>
      </div>

      <br/>
      <br/>
      
      <div>
        <FileInput file={file} setFiles={setFile} type={"image/*"} header="head" footer="foot" />
      </div>
    </>
  );
}

export default App;
