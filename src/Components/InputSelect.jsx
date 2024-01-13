import { SIZE } from 'baseui/input'
import { Select } from 'baseui/select'
import React from 'react'

export default function InputSelect(props) {
  return (
    <div>
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
        >
          {props?.header} {props?.required && <sup style={{color: "red"}}>*</sup>}
        </p>
      )}
      <Select
        value={props?.inputValue || ""}
        onChange={(e) => props.setInputValue(e.value)}
        options={props?.list}
        required={props?.required || false}
        error={props?.boxColor === "Red" ? true : false}
        positive={props?.boxColor === "Green" ? true : false}
        disabled={props?.disabled || false}
        size={
          (props?.size === "compact" && SIZE.compact) ||
          (props?.size === "large" && SIZE.large) ||
          (props?.size === "mini" && SIZE.mini) ||
          SIZE.default
        }
        placeholder={props?.placeholder || ""}
        clearable={props?.clearable || false}
        autoFocus={props?.autoFocus || false}
        isLoading={props?.list?.length===0 || false}
        multi={props?.multiple || false}
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
  )
}
