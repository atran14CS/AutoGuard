import React, { useState, useEffect } from 'react';
import { Button } from '@chakra-ui/react';
import axios from 'axios';

const NewInfo = () => {
    const [stolenCars, setStolenCars] = useState([]);
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);

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
            <ul>
                {stolenCars.length === 0 ? (
                    <p>No stolen cars found.</p>
                ) : (
                    stolenCars.map((car) => (
                        <li key={car._id}>
                            {car.licensePlate} - {car.make} {car.model} ({car.state}, {car.city})
                        </li>
                    ))
                )}
            </ul>
            <Button onClick={fetchStolenCars} isLoading={loading}>
                Fetch Stolen Cars
            </Button>
        </div>
    );
};

export default NewInfo;
