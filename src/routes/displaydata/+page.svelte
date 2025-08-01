<script lang="ts">
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import DataTable from '$lib/components/Datatable.svelte';
    // Using regular HTML elements with Skeleton CSS classes for SSR compatibility
    import type { FormatDatabaseData } from '../../types';

    export let data: { supaData: FormatDatabaseData[]; error?: string };

    let loading = false;
    let error: string | null = null;
    let tableData: FormatDatabaseData[] = [];
    // No longer needed since we're using server-provided data

    // Initialize data immediately
    $: tableData = data.supaData || [];
    $: if (data.error) {
        error = data.error;
    }

    onMount(() => {
        console.log('Data loaded:', tableData);
        console.log('Data from server:', data);
    });

    async function handleRefresh() {
        // Reload the page to get fresh data from server
        window.location.reload();
    }

    // Export functionality is handled by the DataTable component

    // Row click handler for future use
</script>

<svelte:head>
    <title>Attendance Data - Arise Church</title>
</svelte:head>

<div class="container mx-auto p-4 space-y-6">
    <!-- Header -->
    <div
        class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
    >
        <div>
            <h1 class="h1">Attendance Data</h1>
            <p class="text-surface-600">
                View and manage church attendance records
            </p>
        </div>
        <div class="flex gap-2">
            <button
                class="btn variant-outlined"
                on:click={handleRefresh}
                disabled={loading}
            >
                {loading ? 'Loading...' : 'Refresh'}
            </button>
            <button class="btn variant-filled" on:click={() => goto('/form')}>
                Add New Record
            </button>
        </div>
    </div>

    <!-- Error Alert -->
    {#if error}
        <div class="alert variant-filled-error">
            <strong>Error:</strong>
            {error}
            <button class="btn variant-outlined" on:click={handleRefresh}>
                Try Again
            </button>
        </div>
    {/if}

    <!-- Data Table -->
    <DataTable data={tableData} {loading} {error} />

    <!-- Summary Stats -->
    {#if tableData.length > 0}
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div class="card p-4">
                <h3 class="h4">Total Records</h3>
                <p class="text-2xl font-bold">{tableData.length}</p>
            </div>
            <div class="card p-4">
                <h3 class="h4">Total Attendance</h3>
                <p class="text-2xl font-bold">
                    {tableData.reduce(
                        (sum, item) => sum + (item.total_amount || 0),
                        0
                    )}
                </p>
            </div>
            <div class="card p-4">
                <h3 class="h4">Average Attendance</h3>
                <p class="text-2xl font-bold">
                    {Math.round(
                        tableData.reduce(
                            (sum, item) => sum + (item.total_amount || 0),
                            0
                        ) / tableData.length
                    )}
                </p>
            </div>
            <div class="card p-4">
                <h3 class="h4">Latest Entry</h3>
                <p class="text-lg">
                    {tableData[0]?.date
                        ? new Date(tableData[0].date).toLocaleDateString()
                        : 'N/A'}
                </p>
            </div>
        </div>
    {/if}
</div>
