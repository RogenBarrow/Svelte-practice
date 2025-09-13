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

    // Create pagination settings that can be bound to the component
    let paginationSettings = {
        page: 0,
        limit: 5,
        size: 0,
        amounts: [1, 2, 5, 10],
    } satisfies PaginationSettings;

    // Update settings when data changes
    $: if (data) {
        paginationSettings = {
            page: data.pageTable - 1, // Convert 1-based to 0-based for Skeleton UI
            limit: data.amountTable,
            size: data.table.length,
            amounts: [1, 2, 5, 10],
        };
    }

    // Function to handle pagination
    const handlePagination = (page: number, limit: number) => {
        console.log('Page:', page, 'Limit:', limit);
        goto(`/displaydata/paginated?page=${page}&limit=${limit}`);
    };

    // Handle changes in amount - use the event detail directly
    const onAmountChange = (event: CustomEvent) => {
        const newLimit = parseInt(event.detail, 10);
        const currentPage = paginationSettings.page + 1; // Convert 0-based to 1-based
        console.log(
            'Amount change - Event detail:',
            event.detail,
            'New limit:',
            newLimit,
            'Current page:',
            currentPage
        );
        handlePagination(currentPage, newLimit);
    };

    // Handle changes in page - use the event detail directly
    const onPageChange = (event: CustomEvent) => {
        const newPage = parseInt(event.detail, 10) + 1; // Convert 0-based to 1-based
        const currentLimit = paginationSettings.limit;
        console.log(
            'Page change - Event detail:',
            event.detail,
            'New page:',
            newPage,
            'Current limit:',
            currentLimit
        );
        handlePagination(newPage, currentLimit);
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
                settings={paginationSettings}
                showFirstLastButtons={false}
                showPreviousNextButtons={true}
                on:page={onPageChange}
                on:amount={onAmountChange}
            ></Paginator>
        </div>
        <div class="basis-1/3"></div>
    </div>
</div>
