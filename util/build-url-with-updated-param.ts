"use client"

export const buildUrlWithUpdatedParam = (key: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (value) {
        searchParams.set(key, value); // Update or add the search parameter
    } else {
        searchParams.delete(key); // Remove the search parameter if the value is falsy
    }
    return `${window.location.pathname}?${searchParams.toString()}`;
};
