import fetchDataForSum from './server/database/getDataforSum';

export async function pdfPrint() {
    // requires
    const fs = require('fs');
    const PDFDocument = require('pdfkit-table');
    const data = await fetchDataForSum();

    // init document
    let doc = new PDFDocument({ margin: 30, size: 'A4' });
    // save document
    doc.pipe(fs.createWriteStream('./document.pdf'));

    (async function createTable() {
        // table
        const table = {
            title: '',
            headers: [],
            datas: [data],
            rows: [
                /* or simple data */
            ],
        };

        // the magic (async/await)
        await doc.table(table, {
            /* options */
        });
        // -- or --
        // doc.table(table).then(() => { doc.end() }).catch((err) => { })

        // if your run express.js server
        // to show PDF on navigator
        // doc.pipe(res);

        // done!
        doc.end();
    })();
}
