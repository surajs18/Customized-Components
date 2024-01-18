import { SIZE } from "baseui/input";
import { PhoneInput, COUNTRIES } from "baseui/phone-input";
import React from "react";

export default function InputPhone(props) {
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
          title={`${props?.required ? "Required" : ""}`}
        >
          {props?.header} {props?.required && <sup style={{color: "red"}}>*</sup>}
        </p>
      )}
      <PhoneInput
        country={props.country || COUNTRIES.IN}
        onCountryChange={({ option }) => props.setCountry(option)}
        text={props.phone || ""}
        onTextChange={(e) => {
          props.setPhone(e.currentTarget.value);
          (props.country === "" ||
            props.country === undefined ||
            props.country === null) &&
            props.setCountry(COUNTRIES.IN);
        }}
        pattern={props?.pattern === "" ? ".*" : props?.pattern}
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
        placeholder={props?.placeholder || "8672532170"}
        clearable={props?.clearable || false}
        clearOnEscape={props?.clearable || false}
        autoFocus={props?.autoFocus || false}
        overrides={{
          Input: {
            props: {
              overrides: {
                Root: {
                  style: ({ $theme }) => ({
                    width: props?.width || "11.5rem",
                    marginLeft: ".3rem",
                  }),
                },
              },
            },
          },
          CountrySelect: {
            props: {
              overrides: {
                Root: {
                  style: ({ $theme }) => ({
                    width: "6rem",
                  }),
                },
              },
            },
          },
        }}
      />
      {props?.footer !== "" && (
        <p
          style={{
            marginTop: "0.5rem",
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
