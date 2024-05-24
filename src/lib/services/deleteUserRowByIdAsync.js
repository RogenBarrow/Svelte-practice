const deleteUserRowByIdAsync = async (id = null) => {
    try {
        if (!id) {
            throw 'No ID received';
        }

        // Send POST request to internal API endpoint
        const response = await fetch('/api/deleteRowId', {
            method: 'POST',
            body: id,
        });

        if (!response.ok) {
            throw new Error('Failed to submit data');
        }

        // Handle success
        console.log('Data submitted successfully');
    } catch (error) {
        throw error;
    }
};

export default deleteUserRowByIdAsync;
