import getSupaData from '$lib/supabaseData';

export const load = async () => {
    try {
        console.log('Starting to load data...');
        const data = await getSupaData();
        console.log('Loaded data for table: ', data);
        console.log('Data type:', typeof data);
        console.log('Data length:', data?.length);

        return {
            supaData: data || [],
        };
    } catch (error) {
        console.error('Error loading data:', error);
        console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
        return {
            supaData: [],
            error: error instanceof Error ? error.message : 'Unknown error'
        };
    }
};
