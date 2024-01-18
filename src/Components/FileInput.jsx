import { FileUploader } from "baseui/file-uploader";
import { useEffect, useRef, useState } from "react";

function useInterval(callback, delay) {
  const savedCallback = useRef(() => {});

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function useFakeProgress() {
  const [fakeProgress, setFakeProgress] = useState(0);
  const [isActive, setIsActive] = useState(false);
  function stopFakeProgress() {
    setIsActive(false);
    setFakeProgress(0);
  }
  function startFakeProgress() {
    setIsActive(true);
  }
  useInterval(
    () => {
      if (fakeProgress >= 100) {
        stopFakeProgress();
      } else {
        setFakeProgress(fakeProgress + 10);
      }
    },
    isActive ? 500 : null
  );
  return [fakeProgress, startFakeProgress, stopFakeProgress];
}

function FileInput(props) {
  const [errorMessage, setErrorMessage] = useState("");
  const [progressAmount, startFakeProgress, stopFakeProgress] =
    useFakeProgress();
  const measures = {
    kb: 1024,
    mb: 1024 * 1024, // 1 MB = 1024 KB
    gb: 1024 * 1024 * 1024, // 1 GB = 1024 MB = 1024 * 1024 KB
  };

  async function Canceled() {
    if (props?.multiple) {
      let copyFile = props.file;
      copyFile.splice(-1);
      await props.setFiles(copyFile);
    } else {
      props.setFiles("");
    }
    stopFakeProgress();
  }

  const fileHandler = (e) => {
    let f = e[0];
    var pattern = new RegExp(`${props.type}`);
    // console.log(pattern.test(f.type))
    if (pattern.test(f.type)) {
      //application/pdf f.type
      let readFile = new FileReader();
      readFile.readAsDataURL(f);
      readFile.onload = (e) => {
        var fd = e.target.result; //{ ...f, file:  };
        if (props?.size) {
          let value = measures?.props?.measure || measures.kb
          // console.log(f.size, props?.size, value)
          if (f.size < props?.size * value) {
            console.log(value)
            props?.multiple
              ? props.setFiles([...props.file, fd])
              : props.setFiles(fd);
          } else {
            setErrorMessage("File size exceeds 50 KB. Please choose a smaller file.",);
          }
        } else {
          props?.multiple
              ? props.setFiles([...props.file, fd])
              : props.setFiles(fd);
        }

        // console.log(fd)
      };
    } else {
      setErrorMessage(`Please upload ${props.type} only`);
    }
  };

  return (
    <div style={{ width: props?.width || "18rem" }}>
      {props?.header !== "" && (
        <p
          style={{
            marginBottom: "0rem",
            width: props?.width || "18rem",
            fontWeight: 900,
            fontSize: "14px",
            cursor: "default",
            userSelect: "none",
          }}
          title={`${props?.required ? "Required " : ""}${
            props?.size &&
            "File size < " + props?.size + (props?.measure || "kb")
          }`}
        >
          {props?.header}
          {props?.size && <sup style={{ color: "red" }}>&#x1D4BE;</sup>}
        </p>
      )}
      <div style={{ marginLeft: ".3rem" }}>
        <FileUploader
          accept={props.type}
          onCancel={Canceled}
          errorMessage={errorMessage}
          value={props.file}
          onDropAccepted={fileHandler}
          multiple={props?.multiple || false}
          onDropRejected={(e) =>{
            setErrorMessage(`Please upload ${props.type} only`)
          }}
          onRetry={(e) => {setErrorMessage(""); stopFakeProgress();}}
          onDrop={(acceptedFiles, rejectedFiles) => {
            // handle file upload...
            startFakeProgress();
          }}
          progressAmount={progressAmount}
          progressMessage={
            progressAmount ? `Uploading... ${progressAmount}% of 100%` : ""
          }
        />
      </div>
      {props?.footer !== "" && (
        <p
          style={{
            marginTop: "0.2rem",
            marginLeft: "0.5rem",
            width: props?.width || "18rem",
            fontWeight: 400,
            fontSize: "14px",
            cursor: "default",
            userSelect: "none",
          }}
        >
          {props?.footer}
        </p>
      )}
    </div>
  );
}

export default FileInput;
