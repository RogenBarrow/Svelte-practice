const deleteViewRowByIdAsync = async (id = null) => {
    try {
        if (!id) {
            throw new Error('No ID received');
        }

        const response = await fetch('/api/deleteViewRowId', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        });

        if (!response.ok) {
            const text = await response.text().catch(() => '');
            throw new Error(`Delete failed: ${response.status} ${text}`);
        }

        return true;
    } catch (error) {
        throw error;
    }
};

export default deleteViewRowByIdAsync;
