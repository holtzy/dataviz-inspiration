"use client"

export const buildUrlWithUpdatedParam = (key: string, value?: string | string[]) => {
    // Only run if we are in the browser
    if (typeof window === "undefined") return ""; 

    const searchParams = new URLSearchParams(window.location.search);

    // Remove existing parameters with the given key
    searchParams.delete(key);

    if (value) {
        if (Array.isArray(value)) {
            value.forEach(v => searchParams.append(key, v));
        } else {
            searchParams.append(key, value);
        }
    }

    return `${window.location.pathname}?${searchParams.toString()}`;
};

