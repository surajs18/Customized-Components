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
  console.log(props);
  const [errorMessage, setErrorMessage] = useState("");
  const [progressAmount, startFakeProgress, stopFakeProgress] =
    useFakeProgress();

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
        props?.multiple
          ? props.setFiles([...props.file, fd])
          : props.setFiles(fd);
      };
    } else {
      setErrorMessage(`Please upload ${props.type} only`);
    }
  };

  const onDropReject = (e) => {
    const f = e[0];
    var pattern = new RegExp(`${props.type}`);
    if (!pattern.test(f.type)) {
      setErrorMessage(`Please upload ${props?.type} only`);
    } else if (props?.minSize && f.size < props?.minSize) {
      setErrorMessage(`File size must be >  ${props?.minSize / 1000} kb`);
    } else if (props?.maxSize && f.size < props?.maxSize) {
      setErrorMessage(`File size must be <  ${props?.minSize / 1000} kb`);
    }
  };

  return (
    <div style={{ width: props?.width || "18rem" }}>
      {props?.header !== "" && (
        <p
          style={{
            marginBottom: "0rem",
            width: props?.width || "18rem",
            cursor: "default",
            userSelect: "none",
          }}
          title={`${props?.required ? "Required " : ""}${
            props?.minSize ? "File size > " + props?.minSize / 1000 + "kb" : ""
          }${
            props?.maxSize ? "File size < " + props?.maxSize / 1000 + "kb" : ""
          }`}
        >
          {props?.header}
          {(props?.maxSize || props?.minSize) && !props?.required && (
            <sup style={{ color: "red" }}>&#x1D4BE;</sup>
          )}
          {(props?.maxSize || props?.minSize) && props?.required && (
            <sup style={{ color: "red" }}>*</sup>
          )}
        </p>
      )}
      <div
        style={{
          marginLeft: ".3rem",
        }}
      >
        <FileUploader
          accept={props.type}
          onCancel={Canceled}
          errorMessage={errorMessage}
          onDropAccepted={fileHandler}
          multiple={props?.multiple || false}
          maxSize={props?.maxSize}
          minSize={props?.minSize}
          onDropRejected={(e) => {
            onDropReject(e);
          }}
          onRetry={() => {
            setErrorMessage("");
            stopFakeProgress();
          }}
          onDrop={() => {
            // acceptedFiles, rejectedFiles
            // handle file upload...
            startFakeProgress();
          }}
          progressAmount={progressAmount}
          progressMessage={
            progressAmount ? `Uploading... ${progressAmount}% of 100%` : ""
          }
          overrides={{
            FileDragAndDrop: {
              style: () => ({
                height: props?.height,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }),
            },
          }}
        />
      </div>
      {props?.footer !== "" && (
        <p
          style={{
            marginTop: "0.2rem",
            marginLeft: "0.5rem",
            width: props?.width || "18rem",
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
