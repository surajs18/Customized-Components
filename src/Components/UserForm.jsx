import React, { useState } from "react";
import InputBox from "./InputBox";
import InputSelect from "./InputSelect";
import InputPhone from "./InputPhone";
import { Button } from "baseui/button";
import FileInput from "./FileInput";

export default function UserForm(props) {
  // form data that should be submitted
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState(
    props?.data?.gender ? [props?.data?.gender] : []
  );
  const [phone, setPhone] = useState(props?.data?.phone || "");
  const [country, setCountry] = useState(props?.data?.country || "");
  const [email, setEmail] = useState(props?.data?.email || "");
  const [role, setRole] = useState([
    props?.data?.role || {
      label: "User",
      id: "USER",
    },
  ]);
  const [rolesList] = useState(
    props?.data?.roleList || [
      {
        label: "User",
        id: "USER",
      },
    ]
  );
  const [flat, setFlat] = useState("");
  const [area, setArea] = useState("");
  const [landmark, setLandmark] = useState("");
  const [pin, setPin] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [residantCountry, setResidantCountry] = useState("");
  const [profilePic, setProfilePic] = useState([]);

  // form handlers
  const [firstNameColor, setFirstNameColor] = useState("");
  const [lastNameColor, setLastNameColor] = useState("");
  const [phoneColor, setPhoneColor] = useState("");
  const [genderColor, setGenderColor] = useState("");
  const [roleColor, setRoleColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [flatColor, setFlatColor] = useState("");
  const [areaColor, setAreaColor] = useState("");
  const [landmarkColor, setLandmarkColor] = useState("");
  const [pinColor, setPinColor] = useState("");
  const [cityColor, setCityColor] = useState("");
  const [stateColor, setStateColor] = useState("");
  const [residantCountryColor, setResidantCountryColor] = useState("");

  function errorHandlers(e) {
    e.preventDefault();
    // patterns
    const firstNameRegex = props?.firstName?.validation || /^[A-Za-z]+$/;
    const lastNameRegex = props?.lastName?.validation || /^[A-Za-z]+$/;
    const phoneRegex = props?.phone?.validation || /^\d{10}$/;
    const emailRegex = props?.email?.validation || /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const flatRegex = props?.flat?.validation || /^[A-Za-z0-9]+$/;
    const areaRegex = props?.area?.validation || /^[A-Za-z0-9]+$/;
    const landmarkRegex = props?.landmark?.validation || /^[A-Za-z0-9]+$/;
    const pinRegex = props?.pin?.validation || /^[A-Za-z0-9]+$/;
    const cityRegex = props?.city?.validation || /^[A-Za-z0-9]+$/;
    const stateRegex = props?.state?.validation || /^[A-Za-z0-9]+$/;
    const residantCountryRegex =
      props?.residantCountry?.validation || /^[A-Za-z]+$/;

    // matchings
    var firstNameMatch = firstNameRegex.test(firstName) ? "Green" : "Red";
    var lastNameMatch = lastNameRegex.test(lastName) ? "Green" : "Red";
    var phoneMatch = phoneRegex.test(phone) ? "Green" : "Red";
    var emailMatch = emailRegex.test(email) ? "Green" : "Red";
    var genderMatch =
      (props?.gender?.required || true) && gender.length !== 0
        ? "Green"
        : "Red";
    var roleMatch =
      (props?.form === "Admin" || true) && role.length === 0 ? "Red" : "Green";
    var flatMatch = flatRegex.test(flat) ? "Green" : "Red";
    var areaMatch = areaRegex.test(area) ? "Green" : "Red";
    var landmarkMatch = landmarkRegex.test(landmark) ? "Green" : "Red";
    var pinMatch = pinRegex.test(pin) ? "Green" : "Red";
    var cityMatch = cityRegex.test(city) ? "Green" : "Red";
    var stateMatch = stateRegex.test(state) ? "Green" : "Red";
    var countryMatch = residantCountryRegex.test(residantCountry) ? "Green" : "Red";

    // setting colors
    setFirstNameColor(firstNameMatch);
    setLastNameColor(lastNameMatch);
    setPhoneColor(phoneMatch);
    setEmailColor(emailMatch);
    setGenderColor(genderMatch);
    setRoleColor(roleMatch);
    setFlatColor(flatMatch);
    setAreaColor(areaMatch);
    setLandmarkColor(landmarkMatch);
    setPinColor(pinMatch);
    setCityColor(cityMatch);
    setStateColor(stateMatch);
    setResidantCountryColor(countryMatch);

    // form submittion
    if (
      firstNameMatch === "Green" &&
      lastNameMatch === "Green" &&
      phoneMatch === "Green" &&
      emailMatch === "Green" &&
      genderColor === "Green" &&
      roleColor === "Green" &&
      flatMatch === "Green" &&
      areaMatch === "Green" &&
      landmarkMatch === "Green" &&
      pinMatch === "Green" &&
      cityMatch === "Green" &&
      stateMatch === "Green" &&
      countryMatch === "Green"
    ) {
      var userData = {
        firstName,
        lastName,
        profilePic,
        country,
        phone,
        email,
        gender,
        role,
        flat,
        area,
        landmark,
        pin,
        city,
        state,
        residantCountry,
      };
      // props.userData(userData);
      console.log("test case passed");
      console.log(userData);
    }
  }

  var genderList = [
    { label: "Male", id: "Male" },
    { label: "Female", id: "Female" },
    { label: "Transgender Woman", id: "Transgender Woman" },
    { label: "Transgender Man", id: "Transgender Man" },
    { label: "Non-Binary", id: "Non-Binary" },
    { label: "Agender", id: "Agender" },
    { label: "Others", id: "Others" },
    { label: "Prefer not to state", id: "Prefer not to state" },
  ];

  return (
    <form onSubmit={errorHandlers}>
      <div style={{ marginLeft: "2rem", marginRight: "2rem" }}>
        <h4 style={{ marginBottom: "0", marginTop: "2.5rem" }}>
          General Details
        </h4>
        <div
          style={{
            display: "flex",
            // flex: "1 0 0rem",
            flexWrap: "wrap",
            gap: "1rem 5rem",
            // justifyContent: "space-around",
            alignItems: "center",
            marginLeft: "1rem",
          }}
        >
          <InputBox
            inputValue={firstName}
            setInputValue={setFirstName}
            type="name"
            pattern={props?.firstName?.validation || ""}
            required={props?.firstName?.required || true}
            boxColor={firstNameColor}
            readOnly={props?.firstName?.readOnly || false}
            disabled={props?.firstName?.disabled || false}
            size={props?.firstName?.size || ""}
            placeholder={props?.firstName?.placeholder || "Sam"}
            clearable={props?.firstName?.clearable || true}
            startEnhancer={props?.firstName?.startEnhancer || ""}
            endEnhancer={props?.firstName?.endEnhancer || ""}
            width={props?.firstName?.width || ""}
            header={props?.firstName?.header || "First Name"}
            footer={props?.firstName?.footer || ""}
            autoFocus={props?.firstName?.autoFocus || true}
          />

          <InputBox
            inputValue={lastName}
            setInputValue={setLastName}
            type="name"
            pattern={props?.lastName?.validation || ""}
            required={props?.lastName?.required || true}
            boxColor={lastNameColor}
            readOnly={props?.lastName?.readOnly || false}
            disabled={props?.lastName?.disabled || false}
            size={props?.lastName?.size || ""}
            placeholder={props?.lastName?.placeholder || "Andrew"}
            clearable={props?.lastName?.clearable || true}
            startEnhancer={props?.lastName?.startEnhancer || ""}
            endEnhancer={props?.lastName?.endEnhancer || ""}
            width={props?.lastName?.width || ""}
            header={props?.lastName?.header || "Last Name"}
            footer={props?.lastName?.footer || ""}
            autoFocus={props?.lastName?.autoFocus || false}
          />

          <FileInput
            file={profilePic}
            setFiles={setProfilePic}
            type={"image/*"}
            header={"Profile Picture"}
            size={50}
            measure="kb"
          />
          <InputSelect
            inputValue={gender}
            setInputValue={setGender}
            list={genderList}
            required={props?.gender?.required || true}
            boxColor={genderColor}
            disabled={false}
            size={""}
            placeholder="Select Your Gender"
            clearable={true}
            autoFocus={false}
            multiple={false}
            width=""
            header="Gender"
            footer=""
          />

          <InputPhone
            country={country}
            setCountry={setCountry}
            phone={phone}
            setPhone={setPhone}
            pattern=""
            required={true}
            boxColor={phoneColor}
            disabled={false}
            size={"larger"}
            placeholder="9656732578"
            clearable={true}
            autoFocus={false}
            width=""
            header="Phone Number"
            footer=""
          />

          <InputBox
            inputValue={email}
            setInputValue={setEmail}
            type="email"
            pattern={props?.email?.validation || ""}
            required={props?.email?.required || true}
            boxColor={emailColor}
            readOnly={props?.email?.readOnly || false}
            disabled={props?.email?.disabled || false}
            size={props?.email?.size || ""}
            placeholder={props?.email?.placeholder || "user_id@email.com"}
            clearable={props?.email?.clearable || true}
            startEnhancer={props?.email?.startEnhancer || ""}
            endEnhancer={props?.email?.endEnhancer || ""}
            width={props?.email?.width || ""}
            header={props?.email?.header || "Email ID"}
            footer={props?.email?.footer || ""}
            autoFocus={props?.email?.autoFocus || false}
          />

          {props?.form === "ADMIN" && (
            <InputSelect
              inputValue={role}
              setInputValue={setRole}
              list={rolesList}
              required={props?.form === "ADMIN" || false}
              boxColor={roleColor}
              disabled={false}
              size={""}
              placeholder="Select User Role"
              clearable={true}
              autoFocus={false}
              multiple={false}
              width=""
              header="Role"
              footer=""
            />
          )}
        </div>
      </div>

      <div style={{ marginLeft: "2rem", marginRight: "2rem" }}>
        <h4 style={{ marginBottom: "0", marginTop: "2.5rem" }}>Address</h4>
        <div
          style={{
            display: "flex",
            flex: "1 0 0rem",
            flexWrap: "wrap",
            gap: "1rem 5rem",
            // justifyContent: "space-around",
            alignItems: "center",
            marginLeft: "1rem",
          }}
        >
          <InputBox
            inputValue={flat}
            setInputValue={setFlat}
            type=""
            pattern={props?.flat?.validation || ""}
            required={props?.flat?.required || true}
            boxColor={flatColor}
            readOnly={props?.flat?.readOnly || false}
            disabled={props?.flat?.disabled || false}
            size={props?.flat?.size || ""}
            placeholder={props?.flat?.placeholder || ""}
            clearable={props?.flat?.clearable || true}
            startEnhancer={props?.flat?.startEnhancer || ""}
            endEnhancer={props?.flat?.endEnhancer || ""}
            width={props?.flat?.width || ""}
            header={
              props?.flat?.header ||
              "Flat, House No., Building, Company, Apartment"
            }
            footer={props?.flat?.footer || ""}
            autoFocus={props?.flat?.autoFocus || false}
          />

          <InputBox
            inputValue={area}
            setInputValue={setArea}
            type=""
            pattern={props?.area?.validation || ""}
            required={props?.area?.required || true}
            boxColor={areaColor}
            readOnly={props?.area?.readOnly || false}
            disabled={props?.area?.disabled || false}
            size={props?.area?.size || ""}
            placeholder={props?.area?.placeholder || ""}
            clearable={props?.area?.clearable || true}
            startEnhancer={props?.area?.startEnhancer || ""}
            endEnhancer={props?.area?.endEnhancer || ""}
            width={props?.area?.width || ""}
            header={props?.area?.header || "Area, Street, Sector, Village"}
            footer={props?.area?.footer || ""}
            autoFocus={props?.area?.autoFocus || false}
          />

          <InputBox
            inputValue={landmark}
            setInputValue={setLandmark}
            type=""
            pattern={props?.landmark?.validation || ""}
            required={props?.landmark?.required || true}
            boxColor={landmarkColor}
            readOnly={props?.landmark?.readOnly || false}
            disabled={props?.landmark?.disabled || false}
            size={props?.landmark?.size || ""}
            placeholder={props?.landmark?.placeholder || "Near Apollo Hospital"}
            clearable={props?.landmark?.clearable || true}
            startEnhancer={props?.landmark?.startEnhancer || ""}
            endEnhancer={props?.landmark?.endEnhancer || ""}
            width={props?.landmark?.width || ""}
            header={props?.landmark?.header || "Landmark"}
            footer={props?.landmark?.footer || ""}
            autoFocus={props?.landmark?.autoFocus || false}
          />

          <InputBox
            inputValue={pin}
            setInputValue={setPin}
            type="number"
            pattern={props?.pin?.validation || ""}
            required={props?.pin?.required || true}
            boxColor={pinColor}
            readOnly={props?.pin?.readOnly || false}
            disabled={props?.pin?.disabled || false}
            size={props?.pin?.size || ""}
            placeholder={props?.pin?.placeholder || "6 digits PIN code"}
            clearable={props?.pin?.clearable || true}
            startEnhancer={props?.pin?.startEnhancer || ""}
            endEnhancer={props?.pin?.endEnhancer || ""}
            width={props?.pin?.width || ""}
            header={props?.pin?.header || "Pincode"}
            footer={props?.pin?.footer || ""}
            autoFocus={props?.pin?.autoFocus || false}
          />

          <InputBox
            inputValue={city}
            setInputValue={setCity}
            type=""
            pattern={props?.city?.validation || ""}
            required={props?.city?.required || true}
            boxColor={cityColor}
            readOnly={props?.city?.readOnly || false}
            disabled={props?.city?.disabled || false}
            size={props?.city?.size || ""}
            placeholder={props?.city?.placeholder || ""}
            clearable={props?.city?.clearable || true}
            startEnhancer={props?.city?.startEnhancer || ""}
            endEnhancer={props?.city?.endEnhancer || ""}
            width={props?.city?.width || ""}
            header={props?.city?.header || "Town/City"}
            footer={props?.city?.footer || ""}
            autoFocus={props?.city?.autoFocus || false}
          />

          <InputBox
            inputValue={state}
            setInputValue={setState}
            type=""
            pattern={props?.state?.validation || ""}
            required={props?.state?.required || true}
            boxColor={stateColor}
            readOnly={props?.state?.readOnly || false}
            disabled={props?.state?.disabled || false}
            size={props?.state?.size || ""}
            placeholder={props?.state?.placeholder || ""}
            clearable={props?.state?.clearable || true}
            startEnhancer={props?.state?.startEnhancer || ""}
            endEnhancer={props?.state?.endEnhancer || ""}
            width={props?.state?.width || ""}
            header={props?.state?.header || "State"}
            footer={props?.state?.footer || ""}
            autoFocus={props?.state?.autoFocus || false}
          />

          <InputBox
            inputValue={residantCountry}
            setInputValue={setResidantCountry}
            type=""
            pattern={props?.residantCountry?.validation || ""}
            required={props?.residantCountry?.required || true}
            boxColor={residantCountryColor}
            readOnly={props?.residantCountry?.readOnly || false}
            disabled={props?.residantCountry?.disabled || false}
            size={props?.residantCountry?.size || ""}
            placeholder={props?.residantCountry?.placeholder || "India"}
            clearable={props?.residantCountry?.clearable || true}
            startEnhancer={props?.residantCountry?.startEnhancer || ""}
            endEnhancer={props?.residantCountry?.endEnhancer || ""}
            width={props?.residantCountry?.width || ""}
            header={props?.residantCountry?.header || "Country"}
            footer={props?.residantCountry?.footer || ""}
            autoFocus={props?.residantCountry?.autoFocus || false}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2rem",
          marginBottom: "10%",
        }}
      >
        <Button onClick={(e) => errorHandlers(e)}>Create User</Button>
      </div>
    </form>
  );
}
