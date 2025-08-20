import React from 'react'
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const StolenCarsPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Stolen cars</h1>
      <p>Still working on come back again</p>
      <Button onClick={() => navigate("/")}>Go Back</Button>
    </div>
  )
}

export default StolenCarsPage
