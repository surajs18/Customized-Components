import React from "react";
import { Input, SIZE } from "baseui/input";

function InputBox(props) {
  return (
    <div>
      {props?.header !== "" && (
        <p
          style={{
            marginBottom: "0.5rem",
            width: props?.width || "18rem",
            fontWeight: 900,
            fontSize: "14px",
            cursor: "default",
            userSelect: "none",
          }}
        >
          {props?.header}
        </p>
      )}
      <Input
        value={props?.inputValue || ""}
        onChange={(e) => props.setInputValue(e.target.value)}
        type={props?.type || ""}
        pattern={props?.pattern === "" ? ".*" : props?.pattern}
        required={props?.required || false}
        error={props?.boxColor === "Red" ? true : false}
        positive={props?.boxColor === "Green" ? true : false}
        readOnly={props?.readOnly || false}
        disabled={props?.disabled || false}
        size={
          (props?.size === "compact" && SIZE.compact) ||
          (props?.size === "large" && SIZE.large) ||
          (props?.size === "mini" && SIZE.mini) ||
          SIZE.default
        }
        placeholder={props?.placeholder || ""}
        clearable={props?.clearable || false}
        clearOnEscape={props?.clearable || false}
        startEnhancer={props?.startEnhancer || ""}
        endEnhancer={props?.endEnhancer || ""}
        autoFocus={props?.autoFocus || false}
        overrides={{
          Root: {
            style: ({ $theme }) => ({
              width: props?.width || "18rem",
              marginLeft: ".3rem",
            }),
          },
        }}
      />
      {props?.footer !== "" && (
        <p
          style={{
            marginTop: "0rem",
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

export default InputBox;
