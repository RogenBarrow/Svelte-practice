export default async function fetchDataForSum() {
    try {
        const response = await fetch('/api/getDataForStat');
        // Check if the response status is OK (status code 200-299)
        if (!response.ok) {
            throw new Error(
                'Network response was not ok ' + response.statusText
            );
        }
        // Parse the JSON from the response
        const data = await response.json(); // Parse response body as JSON
        // Handle the parsed JSON data
        console.log('fetched data: ', data);
        return data;
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('There was a problem with the fetch operation:', error);
        throw error; // Re-throw the error to reject the promise
    }
}
