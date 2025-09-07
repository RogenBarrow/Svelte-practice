import supabase from './supabase';

/**
 * Fetch a range of rows (inclusive indices).
 * @param {number} from - zero-based start index
 * @param {number} to - zero-based end index (inclusive)
 */
async function getPagination(from, to) {
    if (
        !Number.isInteger(from) ||
        !Number.isInteger(to) ||
        from < 0 ||
        to < from
    ) {
        throw new Error(`Invalid range: from=${from}, to=${to}`);
    }

    const { data, error } = await supabase
        .from('attendance')
        .select('*')
        .order('id', { ascending: true })
        .range(from, to);

    if (error) {
        throw error;
    }

    return data;
}

export default getPagination;
