import supabase from "../../../supabase";

/**
 * @param { any } id
 */

export default async function getRowiD(id) {

    const { data } = await supabase
        .from('attendancetest')
        .select()
        .eq('id', id);
    
    const result = JSON.stringify(data);

    return result;
    
}