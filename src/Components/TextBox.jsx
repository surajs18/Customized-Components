import React from 'react'
import { Textarea } from "baseui/textarea";

function TextBox(props) {
  return (
    <div style={{width: props?.width || "18rem"}}>
        {props?.header !== "" && <p style={{marginBottom: "0rem", marginLeft: ".4rem", width:props?.width || "18rem", fontWeight: 900, fontSize: "14px", cursor: "default", userSelect: "none"}}>{props?.header}</p>}
        <Textarea
            value={props?.textValue}
            onChange={e => props.setTextValue(e.target.value)}
            required={props?.required || false}
            error={props?.redInput || false}
            positive={props?.greenInput || false}
            readOnly={props?.readOnly || false}
            disabled={props?.disabled || false}
            placeholder={props?.placeholder || ""}
        />
        {props?.footer !== "" && <p style={{marginTop: "0rem", marginLeft: ".5rem", width:props?.width || "18rem", fontWeight: 400, fontSize: "14px", cursor: "default", userSelect: "none"}}>{props?.footer}</p>}
    </div>
  )
}

export default TextBox