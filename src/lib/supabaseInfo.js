import supabase from './supabase';

async function getSupaInfo() {
    const { data, error } = await supabase
        .from('info_sirbishi_test')
        .select()
        .order('id', { ascending: true });

    if (error) {
        throw error;
    }

    //const getSupaData = data;

    // console.log('This is the data: ', data);
    // console.error('This is the error: ', error);

    return data;
}

export default getSupaInfo;
