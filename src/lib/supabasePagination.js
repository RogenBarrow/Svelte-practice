import supabase from './supabase';

/**
 * * @param {Number} [page]
 * * @param {number} [number]
 */

async function getPagination(page, number) {
    const { data, error } = await supabase
        .from('attendance')
        .select()
        .range(page, number)
        .order('id', { ascending: true });

    if (error) {
        throw error;
    }

    //const getSupaData = data;

    // console.log('This is the data: ', data);
    // console.error('This is the error: ', error);

    return data;
}

export default getPagination;
