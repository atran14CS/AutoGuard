import React from 'react'

const SelectInput = ({ label, options, value, onChange, defaultText }) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="default">{defaultText || `Select ${label}`}</option>
      <optgroup label={label}>
        {options.map((option, index) => (
          <option key={index} value={typeof option === "string" ? option : option.value}>
            {typeof option === "string" ? option : option.label}
          </option>
        ))}
      </optgroup>
    </select>
  );
};

export default SelectInput;
