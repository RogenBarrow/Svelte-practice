import { error, redirect } from '@sveltejs/kit';
import getRowiD from '../../../lib/components/server/database/getRowId';

export async function load({ url, params }) {
    const id = params.id;

    const data = await getRowiD(id);

    return data;
}

export const actions = {
    default: async ({ request }) => {
        const insertData = await request.formData();
        const obj = Object.fromEntries(insertData.entries());

        console.log('The object data: ', obj, insertData);

        if (error) {
            console.error('Error deleting record:', error);
            return { success: false, error: error.message };
        }

        throw redirect(303, '/'); // Redirect to the home page
    },
};
