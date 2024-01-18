import React from "react";
import { Textarea } from "baseui/textarea";

function TextBox(props) {
  return (
    <div style={{ width: props?.width || "18rem" }}>
      {props?.header !== "" && (
        <p
          style={{
            marginBottom: "0.5rem",
            width: props?.width || "17rem",
            fontWeight: 900,
            fontSize: "14px",
            cursor: "default",
            userSelect: "none",
          }}
          title={`${props?.required ? "Required" : ""}`}
        >
          {props?.header} {props?.required && <sup style={{color: "red"}}>*</sup>}
        </p>
      )}
      <div style={{ marginLeft: ".3rem" }}>
        <Textarea
          value={props?.textValue}
          onChange={(e) => props.setTextValue(e.target.value)}
          required={props?.required || false}
          error={props?.boxColor === "Red" ? true : false}
          positive={props?.boxColor === "Green" ? true : false}
          readOnly={props?.readOnly || false}
          disabled={props?.disabled || false}
          placeholder={props?.placeholder || ""}
          autoFocus={props?.clearable || false}
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

export default TextBox;
