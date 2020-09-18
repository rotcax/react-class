import React, { FC, useEffect, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import axios from 'axios';

const Services: FC<RouteComponentProps> = () => {
    const [results, setResults] = useState([{ name: '' }]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/pokemon').then(res => {
            setResults(res.data.result);
            
        }).catch(err => {
            console.log(err);
        });

    }, []);

    return (
        <div>
            {
                results.map((result, index) => (
                    <li key={index}>
                        { result.name }
                    </li>
                ))
            }
        </div>
    )
};

export default Services;
