import { useState, useEffect } from 'react';

type LikeTableItem = {
    projectId: string;
    numberoflikes: number
}

const useLikesData = () => {
    console.log("retrieving the DB to get the number of likes. Should happen only ONCE")

    const [likesData, setLikesData] = useState({});

    useEffect(() => {
        const fetchLikesData = async () => {
            try {
                const response = await fetch('/api/get-likes');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonResponse = await response.json();

                const data: LikeTableItem[] = jsonResponse.result.rows

                // Convert data array to a map for efficient lookup in the app
                const likesDataMap = {};
                data.forEach((item: { projectId: string, numberoflikes: number }) => {
                    likesDataMap[item.projectid] = item.numberoflikes;
                });

                setLikesData(likesDataMap);

            } catch (error) {
                console.error('Failed to fetch likes data:', error);
            }
        };

        fetchLikesData();
    }, []);

    return likesData;
};

export default useLikesData;
