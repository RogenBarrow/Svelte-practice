 /**
 * @param {Array<data>} data
 * @param {number} targetMonth
 */

function filterDataByMonth(data, targetMonth) {
    return data.filter(entry => {
        const entryMonth = new Date(entry.date).getMonth() + 1; // Adding 1 because months are zero-based
        return entryMonth === targetMonth;
    });
}
    
export default filterDataByMonth;