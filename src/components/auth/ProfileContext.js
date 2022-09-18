import React, { createContext, useContext, useState } from "react";
import { getMemberInfoWordpress } from "../../APIs/WP_functions";

const ProfileContext = createContext();

export function useProfile() {
  return useContext(ProfileContext);
}

export function ProfileProvider({ children }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let memberProfile = {
    first_name: "",
    last_name: "",
    gender: "",
    personal_email: "",
    psid: "",
    cougarnet: "",
    groupme: "",
    age: "",
    classification: "",
    major: "",
    second_major: "",
    minor: "",
    grad_semester: "",
    grad_year: "",
    ethnicity: "",
    member_status: "",
    membership_type: "",
    shirt_size: "",
  };

  /* This only to insert profile to backend.
    After insert to backend, we will only deal with the misso app backend
    Below if statements can still work if we add more columns or change column orders in the wordpress form
  */
  async function setProfileForBackEnd(email) {
    const memberInfo = await getMemberInfoWordpress(email);

    if (memberInfo.length > 0) {
      const char = ":";
      memberInfo?.forEach((item) => {
        if (item.includes("First"))
          memberProfile.first_name = item.substring(item.indexOf(char) + 2);
        if (item.includes("Last"))
          memberProfile.last_name = item.substring(item.indexOf(char) + 2);
        if (item.includes("Gender"))
          memberProfile.gender = item.substring(item.indexOf(char) + 2);
        if (item.includes("Personal Email"))
          memberProfile.personal_email = item.substring(item.indexOf(char) + 2);
        if (item.includes("PSID"))
          memberProfile.psid = item.substring(item.indexOf(char) + 2);
        if (item.includes("Cougarnet Email"))
          memberProfile.cougarnet = item.substring(item.indexOf(char) + 2);
        if (item.includes("GroupMe"))
          memberProfile.groupme = item.substring(item.indexOf(char) + 2);
        if (item.includes("Age"))
          memberProfile.age = item.substring(item.indexOf(char) + 2);
        if (item.includes("Classification"))
          memberProfile.classification = item.substring(item.indexOf(char) + 2);
        if (item.includes("Primary Major"))
          memberProfile.major = item.substring(item.indexOf(char) + 2);
        if (item.includes("Second Major"))
          memberProfile.second_major = item.substring(item.indexOf(char) + 2);
        if (item.includes("Minor"))
          memberProfile.minor = item.substring(item.indexOf(char) + 2);
        if (item.includes("Graduating Semester"))
          memberProfile.grad_semester = item.substring(item.indexOf(char) + 2);
        if (item.includes("Graduating Year"))
          memberProfile.grad_year = item.substring(item.indexOf(char) + 2);
        if (item.includes("Ethnicity"))
          memberProfile.ethnicity = item.substring(item.indexOf(char) + 2);
        if (item.includes("Member Status"))
          memberProfile.member_status = item.substring(item.indexOf(char) + 2);
        if (item.includes("Membership Type"))
          memberProfile.membership_type = item.substring(
            item.indexOf(char) + 2
          );
        if (item.includes("Shirt Size"))
          memberProfile.shirt_size = item.substring(item.indexOf(char) + 2);
      });
    }
    return memberProfile;
  }

  const value = {
    setProfileForBackEnd,
    memberProfile,
    email,
    setEmail,
    password,
    setPassword,
  };

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
}
