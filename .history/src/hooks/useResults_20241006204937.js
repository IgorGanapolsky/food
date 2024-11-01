import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'coral springs'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong: ' + err.message);
        }
    };

    // Call searchAPI when component is first rendered
    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [searchApi, results, errorMessage]
};

