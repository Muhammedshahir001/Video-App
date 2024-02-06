import { EuiComboBox, EuiFormRow } from "@elastic/eui";
import React from "react";

function MeetingUserFeild({
  lable,
  options,
  onChange,
  selectorOptions,
  isClearable,
  placeholder,
  singleSelection = false,
  isInvalid,
  error,
}: {
  lable: string;
  options: any;
  onChange: any;
  selectorOptions: any;
  isClearable: boolean;
  placeholder: string;
  singleSelection: any;
  isInvalid: boolean;
  error: Array<string>;
}) {
  return (
    <EuiFormRow label={lable}>
      <EuiComboBox
        options={options}
        onChange={onChange}
        selectedOptions={selectorOptions}
        singleSelection={singleSelection}
        placeholder={placeholder}
        isClearable={isClearable}
        isInvalid={isInvalid}
        
      ></EuiComboBox>
    </EuiFormRow>
  );
}

export default MeetingUserFeild;
