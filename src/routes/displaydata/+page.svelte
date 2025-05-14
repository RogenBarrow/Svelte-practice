<script lang="ts">
    import Datatable from '$lib/components/Datatable.svelte';
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
    import { pdfPrint } from '$lib/components/pdf.js';
    // @ts-nocheck

    import { Table } from '@skeletonlabs/skeleton';
    import type {
        PaginationSettings,
        TableSource,
    } from '@skeletonlabs/skeleton';
    import { tableMapperValues } from '@skeletonlabs/skeleton';
    import { Paginator } from '@skeletonlabs/skeleton';

    export let data;

    const tableSimple: TableSource = {
        // A list of heading labels.
        head: [
            'date',
            'name',
            //'amount attendance',
            //'amount kids',
            //'amount kids leaders',
            'total amount',
        ],
        // The data visibly shown in your table body UI.
        body: tableMapperValues(data.pagination, [
            'date',
            'name',
            //'amount',
            //'amount_kids',
            //'amount_kids_leader',
            'total_amount',
        ]),
        // Optional: The data returned when interactive is enabled and a row is clicked.
        meta: tableMapperValues(data.pagination, ['id']),
    };

    let paginationSettings = {
        page: 0,
        limit: 5,
        size: data.supaData.length,
        amounts: [1, 2, 5, 10],
    } satisfies PaginationSettings;

    let currentPage = '0';
    let currentAmount = '5';

    // When the component loads, extract the initial values from the URL
    $: {
        const queryParams = $page.url.searchParams;
        currentPage = queryParams.get('page') || '0';
        currentAmount = queryParams.get('amount') || '5';
    }

    // Function to handle pagination
    const handlePagination = () => {
        const fromRecord =
            parseInt(currentPage, 10) * parseInt(currentAmount, 10);
        const toRecord = fromRecord + parseInt(currentAmount, 10);

        console.log('From Record:', fromRecord, 'To Record:', toRecord);

        // Update the URL with the new page and amount (fromRecord and toRecord)
        goto(`/displaydata/paginated?from=${fromRecord}&to=${toRecord}`);
    };

    // Handle changes in amount
    const onAmountChange = (event: any) => {
        currentAmount = event.detail;
        handlePagination();
    };

    // Handle changes in page
    const onPageChange = (event: any) => {
        currentPage = event.detail;
        handlePagination();
    };
</script>

<html lang="en">
    <body>
        <div class="">
            <button
                type="button"
                class="btn variant-filled bg-primary-500 ml-12 mb-2"
                on:click={pdfPrint}>Download PDF</button
            >
            <div />
            <div class=" table-auto content-center w-2/3 space-y-2">
                <div><Datatable /></div>
            </div>
            <div class="flex flex-row">
                <div class="basis-1/3"></div>
                <div id="pdf">
                    <Table
                        class="table table-hover max-w-screen-md basis-1/3"
                        source={tableSimple}
                        interactive={true}
                        on:selected={(event) =>
                            goto(`/displaydata/${event.detail}`)}
                    />
                    <Paginator
                        bind:settings={paginationSettings}
                        showFirstLastButtons={false}
                        showPreviousNextButtons={true}
                        on:page={onPageChange}
                        on:amount={onAmountChange}
                    ></Paginator>
                </div>
                <div class="basis-1/3"></div>
            </div>
        </div></body
    >
</html>
