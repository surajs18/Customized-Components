import React from 'react'
import InputBox from './InputBox';

export default function UserForm(props) {

    // form data that should be submitted
    const [name, setName] = React.useState("");
    const [gender, setGender] = React.useState([]);
    const [phone, setPhone] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [address, setAddress] = React.useState("");

    // form handlers
    const [nameColor, setNameColor] = React.useState("");
    const [phoneColor, setPhoneColor] = React.useState("");
    const [emailColor, setEmailColor] = React.useState("");
    const [addressColor, setAddressColor] = React.useState("");

    function errorHandlers(){
        // patterns
        const nameRegex = props?.name?.validation || "";
        const phoneRegex = props?.phone?.validation || /^\d{10}$/;
        const emailRegex = props?.email?.validation || /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const addressRegex = props?.address?.validation || "";
        
        // matchings
        var nameMatch = nameRegex.test(name) ? "Green" : "Red";
        var phoneMatch = phoneRegex.test(phone) ? "Green" : "Red";
        var emailMatch = emailRegex.test(email) ? "Green" : "Red";
        var addressMatch = addressRegex.test(address) ? "Green" : "Red";

        // setting colors
        setNameColor(nameMatch);
        setPhoneColor(phoneMatch);
        setEmailColor(emailMatch);
        setAddressColor(addressMatch);

        // form submittion
        if(nameMatch === "Green" && phoneMatch === "Green" && emailMatch === "Green" && addressMatch === "Green" && gender.length !== 0){
            var userData = {
                name,
                phone,
                email,
                gender,
                address
            };
            props.userData(userData);
        }
    }
    
    var genderList=[
        { label: "Male", id: "Male" },
        { label: "Female", id: "Female" },
        { label: "Transgender Woman", id: "Transgender Woman" },
        { label: "Transgender Man", id: "Transgender Man" },
        { label: "Non-Binary", id: "Non-Binary" },
        { label: "Agender", id: "Agender" },
        { label: "Others", id: "Others" },
        { label: "Prefer not to state", id: "Prefer not to state" },
      ]

  return (
    <form>
        <InputBox
          inputValue={name}
          setInputValue={setName}
          type="name"
          pattern={props?.name?.validation || ""}
          required={props?.name?.required || true}
          error={props?.boxColor === "Red" ? true : false}
          positive={props?.boxColor === "Green" ? true : false}
          readOnly={props?.name?.readOnly || false}
          disabled={props?.name?.disabled || false}
          size={props?.name?.size || ""}
          placeholder={props?.name?.placeholder || "Sam Andrew"}
          clearable={props?.name?.clearable || true}
          startEnhancer={props?.name?.footer || ""}
          endEnhancer={props?.name?.footer || ""}
          width={props?.name?.footer || ""}
          header={props?.name?.footer || "User Name"}
          footer={props?.name?.footer || ""}
        />

        
    </form>
  )
}
