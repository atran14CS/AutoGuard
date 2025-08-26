import React from 'react'
import './Form.css';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  FormErrorIcon,
} from "@chakra-ui/form-control"

import { Input } from "@chakra-ui/react";


const Form = () => {
  return (
    <div>
        <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type='email' />
            <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
    </div>
  )
}

export default Form
