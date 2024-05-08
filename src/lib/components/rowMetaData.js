import { goto } from '$app/navigation';

/**
 * @param {any} meta
 */
export default function metaData(meta) {
    console.log('This is the meta data: ', meta);
    const arrayOfMetaData = meta.detail;
    const id = arrayOfMetaData[0];
    console.log('ID: ', id);
    goto(`/rowdata/${id}`);
}
