<script lang="ts">
    import { goto } from '$app/navigation';
    import { pdfPrint } from '$lib/components/pdf.js';
    import metaData from '$lib/components/rowMetaData.js';
    // @ts-nocheck

    import { Table } from '@skeletonlabs/skeleton';
    import type { TableSource } from '@skeletonlabs/skeleton';
    import { tableMapperValues } from '@skeletonlabs/skeleton';

    export let data;

    const cleanData = data.supaData;
    const sourceData = cleanData;

    const tableSimple: TableSource = {
        // A list of heading labels.
        head: [
            'date',
            'name',
            'amount attendance',
            'amount kids',
            'amount kids leaders',
            'total amount',
        ],
        // The data visibly shown in your table body UI.
        body: tableMapperValues(sourceData, [
            'date',
            'name',
            'amount',
            'amount_kids',
            'amount_kids_leader',
            'total_amount',
        ]),
        // Optional: The data returned when interactive is enabled and a row is clicked.
        meta: tableMapperValues(sourceData, ['id']),
    };
</script>

<html lang="en">
    <body>
        <button
            type="button"
            class="btn variant-filled bg-primary-500 float-right mr-4 mb-2"
            on:click={pdfPrint}>Download PDF</button
        >
        <div id="pdf">
            <Table
                class="table table-hover w-screen"
                source={tableSimple}
                interactive
                on:selected={(event) => goto(`/displaydata/${event.detail}`)}
            />
        </div>
    </body>
</html>
