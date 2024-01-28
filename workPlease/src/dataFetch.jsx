import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetch = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Make a GET request to the Flask API endpoint
                const response = await axios.get('http://127.0.0.1:5000');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {data.map(item => (
                <div key={item.field1}>
                    {item.field1} - {item.field2}
                    {/* Add more fields as needed */}
                </div>
            ))}
        </div>
    );
};

export default DataFetch;