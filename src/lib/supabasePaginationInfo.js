import supabase from './supabase';

/**
 * * @param {Number} [page]
 * * @param {number} [number]
 */

async function getPaginationInfo(page = 0, number = 10) {
    const { data, error } = await supabase
        .from('info_sirbishi_test')
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

export default getPaginationInfo;
