import React from 'react'
import { useState } from 'react';
import './Form.css';
import SelectInput from './SelectInput';
import { COMMON_MAKES} from '../../../backend/models/commonMakes';
import './Searchbar.css';

console.log(COMMON_MAKES);

const Form = () => {
  const [carMake, setCarMake] = useState("");

  console.log(COMMON_MAKES);


  return (
    <div className="searchbar-wrapper">
       <div className="searchbar-container">
      <SelectInput
        label="Car Makes"
        options={COMMON_MAKES}
        value={carMake}
        onChange={setCarMake}
        defaultText="Make"
      />
    </div>
  </div>

  )
}

export default Form
