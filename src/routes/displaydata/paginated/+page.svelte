<script lang="ts">
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
    import { onMount } from 'svelte';

    export let data;

    const setTableSource = (): TableSource => ({
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
        body: tableMapperValues(data.supaData, [
            'date',
            'name',
            //'amount',
            //'amount_kids',
            //'amount_kids_leader',
            'total_amount',
        ]),
        // Optional: The data returned when interactive is enabled and a row is clicked.
        meta: tableMapperValues(data.supaData, ['id']),
    });

    $: tableSimple = data.supaData && setTableSource();

    let paginationSettings = {
        page: 0,
        limit: 5,
        size: data.table.length,
        amounts: [1, 2, 5, 10],
    } satisfies PaginationSettings;

    let currentPage = '0';
    let currentAmount = '5';

    // Function to handle pagination
    const handlePagination = () => {
        const fromRecord =
            parseInt(currentPage, 10) * parseInt(currentAmount, 10) - 1;
        const toRecord = fromRecord + parseInt(currentAmount, 10);

        console.log('From Record:', fromRecord, 'To Record:', toRecord);

        // Update the URL with the new page and amount (fromRecord and toRecord)
        goto(`/displaydata/paginated?from=${fromRecord}&to=${toRecord}`);
    };

    // Handle changes in amount
    const onAmountChange = (event) => {
        currentAmount = event.detail;
        handlePagination();
    };

    // Handle changes in page
    const onPageChange = (event) => {
        currentPage = event.detail;
        handlePagination();
    };
</script>

<div class="">
    <button
        type="button"
        class="btn variant-filled bg-primary-500 ml-12 mb-2"
        on:click={pdfPrint}>Download PDF</button
    >
    <div />
    <div class="flex flex-row">
        <div class="basis-1/3"></div>
        <div id="pdf">
            <Table
                class="table table-hover max-w-screen-md basis-1/3"
                source={tableSimple}
                interactive
                on:selected={(event) => goto(`/displaydata/${event.detail}`)}
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
</div>
