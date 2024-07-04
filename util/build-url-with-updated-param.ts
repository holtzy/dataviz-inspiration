"use client"

export const buildUrlWithUpdatedParam = (key: string, value?: string | string[]) => {
    const searchParams = new URLSearchParams(window.location.search);

    // Remove existing parameters with the given key
    searchParams.delete(key);

    if (value) {
        if (Array.isArray(value)) {
            // Add each value in the array as a separate parameter
            value.forEach(v => searchParams.append(key, v));
        } else {
            // Add a single parameter if value is a string
            searchParams.set(key, value);
        }
    }

    return `${window.location.pathname}?${searchParams.toString()}`;
};
