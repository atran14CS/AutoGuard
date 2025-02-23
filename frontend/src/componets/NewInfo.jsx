import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';
import axios from 'axios';

const MyComponent = () => {
    const [stolenCars, setStolenCars] = useState([]);
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(10);
    const [loading, setLoading] = useState(false);

    const fetchStolenCars = async () => {
        if (!loading) {
            setLoading(true);
            try {
                const response = await axios.get(`http://localhost:5001/stolenCar/getStolenCars?offset=${offset}&limit=${limit}`);
                console.log("API Response:", response); // Log the entire response
                setStolenCars(response.data); // Update this based on the actual structure
            } catch (error) {
                console.error('Error fetching stolen cars:', error);
            } finally {
                setLoading(false);
            }
        }
    };

    console.log("Stolen Cars:", stolenCars); // Log the stolenCars state

    return (
        <div>
            <Button onClick={fetchStolenCars} isLoading={loading}>
                Fetch Stolen Cars
            </Button>
            {/* Render your stolen cars data here */}
            <ul>
                {stolenCars.map((car, index) => (
                    <li key={index}>
                        {car.licensePlate} - {car.make} {car.model} ({car.year})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MyComponent;