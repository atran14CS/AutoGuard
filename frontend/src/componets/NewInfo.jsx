import React, { useState, useEffect } from 'react';
import { Button, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const NewInfo = () => {
  const [stolenCars, setStolenCars] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const fetchStolenCars = async () => {
    console.log("here");
    if (!loading) {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:5001/api/stolenCar/getStolenCars`);
        setStolenCars(response.data);
        console.log("API Response:", response);
      } catch (error) {
        console.error('Error fetching stolen cars:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchStolenCars();
  }, []);

  return (
    <div>
      <h2>Recently Stolen Cars</h2>
      <Table size="sm" variant="simple">
        <Thead>
          <Tr>
            <Th>Make</Th>
            <Th>Model</Th>
            <Th>State</Th>
            <Th>City</Th>
            <Th>License Plate</Th>
            <Th>Date</Th>
          </Tr>
        </Thead>
        <Tbody>
          {stolenCars.map((car) => (
            <Tr key={car._id}>
              <Td>{car.make ?? ''}</Td>
              <Td>{car.model ?? ''}</Td>
              <Td>{car.state ?? ''}</Td>
              <Td>{car.city ?? ''}</Td>
              <Td>{car.licensePlate ?? ''}</Td>
              <Td>{car.date ? new Date(car.date).toLocaleDateString() : ''}</Td>
          </Tr>
          ))}
        </Tbody>
      </Table>

      <Button onClick={() => navigate("/stolencar")}>View More Stolen Cars</Button>
    </div>
  );
};

export default NewInfo;
