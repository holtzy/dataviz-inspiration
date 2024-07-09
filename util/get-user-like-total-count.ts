// How many likes did a user used in total? (Check local storage)
export function getUserLikeTotalCount(): number {
    const likeData = localStorage.getItem(`lklskdozuiezdscbhju`);
    if (likeData) {
        return parseInt(likeData, 10);
    } else {
        return 0;
    }
}
