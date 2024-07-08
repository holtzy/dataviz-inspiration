import { useState, useEffect } from 'react';

const useLikesData = () => {
    const [likesData, setLikesData] = useState([]);

    useEffect(() => {
        const fetchLikesData = async () => {
            try {
                const response = await fetch('/api/get-likes');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setLikesData(data);
            } catch (error) {
                console.error('Failed to fetch likes data:', error);
            }
        };

        fetchLikesData();
    }, []);

    return likesData;
};

export default useLikesData;
