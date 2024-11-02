import supabase from './supabase';

async function getSupaDatats() {
    const { data, error } = await supabase
        .from('attendance')
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

console.log('This is the function: ', getSupaDatats);

export default getSupaDatats;
