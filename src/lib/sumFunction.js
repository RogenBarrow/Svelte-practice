/**
 * @param {any[]} data
 * @returns {Object}
 */
function sumTotalAmountByMonth(data) {
    const monthlySums = {};

    data.forEach((record) => {
        if (record.date && record.total_amount != null) {
            const date = new Date(record.date);
            const month = date.toISOString().slice(0, 7); // Get 'YYYY-MM' format

            if (!monthlySums[month]) {
                monthlySums[month] = 0;
            }

            monthlySums[month] += record.total_amount;
        }
    });

    return monthlySums;
}

export default sumTotalAmountByMonth;
