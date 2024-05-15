export async function load({ url }) {
    const urlPath = url.pathname;
    const splitTheData = urlPath.split('/');
    const id = splitTheData.pop();
    const urlPathId = `http:localhost:5173/api/getRowId?id=${id}`;

    const data = await fetch(urlPathId).then((rowData) => {
        if (!rowData.ok) {
            throw new Error('Rosponse was not completed');
        }
        return rowData.json();
    });
    return {
        rowDataForDisplay: data,
    };
    //console.log('Row Information: ', rowId);
}
