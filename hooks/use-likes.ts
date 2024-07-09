import { useState, useEffect } from 'react';

type LikeTableItem = {
    projectId: string;
    numberoflikes: number
}

const useLikesData = () => {
    const [likesData, setLikesData] = useState({});

    useEffect(() => {
        const fetchLikesData = async () => {
            try {
                const response = await fetch('/api/get-likes');
                console.log("***response", response)
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonResponse = await response.json();
                console.log("***JSON response", jsonResponse)

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

    console.log("likesData after fetch", likesData)
    return likesData;
};

export default useLikesData;
