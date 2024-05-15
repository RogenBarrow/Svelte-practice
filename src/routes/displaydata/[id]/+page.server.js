import getRowiD from "../../../lib/components/server/database/getRowId";

export async function load({ url }) {
    const urlPath = url.pathname;
    const splitTheData = urlPath.split('/');
    const id = splitTheData.pop();
    

    const getDataofRowId = getRowiD(id)
    console.log(getDataofRowId)


    // const data = await fetch(urlPathId).then((rowData) => {
    //     if (!rowData.ok) {
    //         throw new Error('Rosponse was not completed');
    //     }
    //     return rowData.json();
    // });
    // return {
    //     rowDataForDisplay: data,
    // };
    //console.log('Row Information: ', rowId);
}
