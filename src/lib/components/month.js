/**
 * @param {Array<{date: string}> | null | undefined} data
 * @param {number} targetMonth
 */
function filterDataByMonth(data, targetMonth) {
    if (!Array.isArray(data)) return []; // guard against null/undefined/non-arrays
    return data.filter((entry) => {
        const entryMonth = new Date(entry.date).getMonth() + 1; // months are zero-based
        return entryMonth === targetMonth;
    });
}

export default filterDataByMonth;

