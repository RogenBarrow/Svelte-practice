import type { State } from '@vincjo/datatables/remote';
import { browser } from '$app/environment';

export const reload = async (state: State) => {
    //const baseUrl = browser ? '' : ' '; // Adjust this to your actual base URL
    const response = await fetch(
        `/api/getDataPagination?${getParams(state)}`
    );
    return response.json();
};

const getParams = (state: State) => {
    const { pageNumber, rowsPerPage, sort, filters, search } = state;

    let params = `_page=${pageNumber}`;

    if (rowsPerPage) {
        params += `&_limit=${rowsPerPage}`;
    }
    if (sort) {
        params += `&_sort=${sort.orderBy}&_order=${sort.direction}`;
    }
    if (filters) {
        params += filters
            .map(({ filterBy, value }) => `&${filterBy}=${value}`)
            .join();
    }
    if (search) {
        params += `&q=${search}`;
    }
    return params;
};
