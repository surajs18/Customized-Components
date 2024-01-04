import { useState } from "react";
import ModalViewer from "./Components/ModalViewer";
import TextBox from "./Components/TextBox";
import Crums from "./Components/Crums";
import FileInput from "./Components/FileInput";
import InputBox from "./Components/InputBox";
import UserForm from "./Components/UserForm";

function App() {
  //modal handlers
  const [isOpen, setIsOpen] = useState(false);
  const [modalCancel, setModalCancel] = useState(false);
  const [modalOkay, setModalOkay] = useState(false);

  //input handlers
  const [inputValue, setInputValue] = useState("");
  const [boxColor, setBoxColor] = useState("");

  //textarea handler
  const [textValue, setTextValue] = useState("");

  //Breadcrums handler
  const [isClicked, setIsClicked] = useState("");

  //file input handler
  const [file, setFile] = useState("");

  return (
    <>
      <div>
        <h3>Modal</h3>
        <ModalViewer
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          header={"Header"}
          body={"Body"}
          disabledCancel={true}
          modalCancel={modalCancel}
          OnModalCancel={setModalCancel}
          disabledOkay={false}
          modalOkay={modalOkay}
          OnModalOkay={setModalOkay}
        />
        {/*
            isOpen: true || false { compulsory parameter },
            setIsOpen: function to handle the state of isOpen { compulsory parameter },
           disabledCancel: true || false { default parameter is false, optional parameter },
           disabledOkay: true || false { default parameter is false, optional parameter },
           OnModalCancel: function to handle the state of isOpen { optional parameter },
           OnModalOkay: function to handle the state of isOpen { optional parameter }
        */}
        <button
          onClick={(e) => {
            setIsOpen(true);
            setModalCancel(false);
            setModalOkay(false);
          }}
          title="Open Modal"
        >
          Open Modal
        </button>
        <p>
          modalCancel: {modalCancel + ""} <br /> modalOkay:{modalOkay + ""}
        </p>
      </div>

      <br />
      <br />

      <div>
        <h3>Input</h3>
        <InputBox
          inputValue={inputValue}
          setInputValue={setInputValue}
          type=""
          pattern=""
          required={true}
          boxColor={boxColor}
          readOnly={false}
          disabled={false}
          size={"larger"}
          placeholder="hi"
          clearable={true}
          startEnhancer={"@"}
          endEnhancer="@"
          width=""
          header="head"
          footer="foot"
        />
        {/* 
            inputValue: String || Number { compulsory parameter },
            setInputValue: function to handle the state of isOpen { compulsory parameter, returns String },
            type: String {default: "", optional parameter},
            pattern: String {default: "", optional parameter},
            required: true||false {default: false, optional parameter},
            redInput: true||false {default: false, optional parameter},
            greenInput: true||false {default: false, optional parameter},
            readOnly: true||false {default: false, optional parameter},
            diabled: true||false {default: false, optional parameter},
            size: "mini" || "larger" || "compact" {default: default, optional parameter},
            placeholder: String {default: "", optional parameter},
            clearable: true||false {default: false, optional parameter},
            startEnhancer: String || HTML Tag || HTML Element {default: "", optional parameter},
            endEnhancer: String || HTML Tag || HTML Element {default: "", optional parameter},
            width: CSS unit {default: 18rem, optional parameter},
            header: String || Number || HTML Tag || HTML Element {default: none, optional parameter},
            footer: String || Number || HTML Tag || HTML Element {default: none, optional parameter},
        */}
        <button
          onClick={(e) => {
            setBoxColor("Red");
          }}
        >
          Make Input Red
        </button>
        <button
          onClick={(e) => {
            setBoxColor("");
          }}
        >
          Set Default
        </button>
        <button
          onClick={(e) => {
            setBoxColor("Green");
          }}
        >
          Make Input Green
        </button>
        <p>{inputValue}</p>
      </div>

      <br />
      <br />

      <div>
        <h3>Textarea</h3>
        <TextBox
          textValue={textValue}
          setTextValue={setTextValue}
          required={true}
          boxColor={boxColor}
          readOnly={false}
          disabled={false}
          placeholder="hi"
          width=""
          header="head"
          footer="foot"
        />
        <p>{textValue}</p>

        {/* 
            textValue: String || Number { compulsory parameter },
            setTextValue: function to handle the state of isOpen { compulsory parameter, returns String },
            required: true||false {default: false, optional parameter},
            redInput: true||false {default: false, optional parameter},
            greenInput: true||false {default: false, optional parameter},
            readOnly: true||false {default: false, optional parameter},
            diabled: true||false {default: false, optional parameter},
            placeholder: String {default: "", optional parameter},            
            width: CSS unit {default: 18rem, optional parameter},
            header: String || Number || HTML Tag || HTML Element {default: none, optional parameter},
            footer: String || Number || HTML Tag || HTML Element {default: none, optional parameter},
        */}
      </div>

      <br />
      <br />

      <div>
        <h3>Breadcrums</h3>
        <Crums
          crum={["Home", "Dashboard", "Edit"]}
          setIsClicked={setIsClicked}
        />
        {/* 
          crum: [String || Number || HTML Tag || HTML Element] {default: [], optional parameter},
          setIsClicked: function to return is any of the crum piece that was clicked { optional parameter, returns String },
        */}
        <p>{isClicked}</p>
      </div>

      <br />
      <br />

      <div>
        <FileInput
          file={file}
          setFiles={setFile}
          type={"image/*"}
          header="head"
          footer="foot"
          multiple={true}
        />
        <button
          onClick={(e) => {
            console.log(file)
          }}
        >
          Console Log: "file" variable
        </button>
        {/* 
          file: blob { compulsory parameter },
          setFiles: function to handle file { compulsory parameter, returns blob },
          type: file type as regex { compulsory parameter },
          header: String || Number || HTML Tag || HTML Element {default: none, optional parameter},
          footer: String || Number || HTML Tag || HTML Element {default: none, optional parameter},
          multiple: true||false {default: false, optional parameter},
        */}
      </div>

      <br />
      <br />

      <div>
        <UserForm />
      </div>
    </>
  );
}

export default App;
