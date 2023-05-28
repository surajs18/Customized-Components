import React from 'react'
import { Input, SIZE } from "baseui/input";

function InputBoxes(props) {

  return (
    <>
    {props?.header !== "" && <p style={{marginBottom: "0rem", marginLeft: ".4rem", width:props?.width || "18rem", fontWeight: 900, fontSize: "14px", cursor: "default", userSelect: "none"}}>{props?.header}</p>}
    <Input
      value={props?.inputValue || ""}
      onChange={e => props.setInputValue(e.target.value)}
      type={props?.type || ""}
      pattern={props?.pattern || ""}
      required={props?.required || false}
      error={props?.redInput || false}
      positive={props?.greenInput || false}
      readOnly={props?.readOnly || false}
      disabled={props?.disabled || false}
      size={(props?.size === "compact" && SIZE.compact) || (props?.size === "large" && SIZE.large) || (props?.size === "mini" && SIZE.mini) || SIZE.default}
      placeholder={props?.placeholder || ""}
      clearable={ props?.clearable || false}
      clearOnEscape={ props?.clearable || false}
      startEnhancer={ props?.startEnhancer || ""}
      endEnhancer={ props?.endEnhancer || ""}
      overrides={{
            Root: {
                style: ({ $theme }) => ({ width: props?.width || "18rem" })
            }
       }}
    />
    {props?.footer !== "" && <p style={{marginTop: "0rem", marginLeft: ".5rem", width:props?.width || "18rem", fontWeight: 400, fontSize: "14px", cursor: "default", userSelect: "none"}}>{props?.footer}</p>}
    </>
  )
}

export default InputBoxes