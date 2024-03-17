import { error } from '@sveltejs/kit';
import { jsPDF } from 'jspdf';

export function pdfPrint() {
    try {
        const doc = new jsPDF('l', 'pt', 'a4');

        const source = document.getElementById('pdf')!;
        if (!source) {
            throw new Error('PDF source element not found');
        }

        console.log(source);
        doc.html(source, {
            callback: function () {
                // Access the 'doc' object from the outer scope directly
                doc.save('test.pdf');
            },
            x: 5,
            y: 5,
            windowWidth: 50,
        });

        return pdfPrint;
    } catch {
        error;
        console.log(error);
    }
}
