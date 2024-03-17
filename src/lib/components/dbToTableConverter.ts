/**
 * @param {Array<data>} data
 */

import type { FormatDatabaseData, FormatTableData } from '../../types';

export default (data: FormatDatabaseData) => {
    const tableData: FormatTableData = {
        date: data.date ? data.date : '',
        amount: data.amount ? data.amount.toString() : '',
        amount_kids: data.amount_kids ? data.amount_kids.toString() : '',
        amount_kids_leader: data.amount_kids_leader
            ? data.amount_kids_leader.toString()
            : '',
        total_amount: data.total_amount ? data.total_amount.toString() : '',
        name: data.name ? data.name : '',
    };
    return JSON.stringify(tableData);
};
