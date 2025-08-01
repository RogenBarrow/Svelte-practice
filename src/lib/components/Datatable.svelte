<script lang="ts">
    import type { FormatDatabaseData } from '../../types';

    export let data: FormatDatabaseData[] = [];
    export let loading = false;
    export let error: string | null = null;

    // Data validation
    $: if (data && data.length > 0) {
        console.log(`DataTable loaded ${data.length} records`);
    }

    // Pagination state
    let currentPage = 1;
    let itemsPerPage = 10;
    let searchTerm = '';

    // Computed values
    $: filteredData = data.filter(
        (item) =>
            item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.date?.includes(searchTerm) ||
            item.amount?.toString().includes(searchTerm) ||
            item.total_amount?.toString().includes(searchTerm)
    );

    $: paginatedData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    $: totalItems = filteredData.length;
    $: totalPages = Math.ceil(totalItems / itemsPerPage);

    function formatDate(dateString: string): string {
        if (!dateString) return 'N/A';
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    }

    function handlePageChange(newPage: number) {
        if (newPage >= 1 && newPage <= totalPages) {
            currentPage = newPage;
        }
    }

    function handlePageSizeChange(newSize: number) {
        itemsPerPage = newSize;
        currentPage = 1;
    }

    function exportToCSV() {
        const headers = [
            'Date',
            'Submitter',
            'Adults',
            'Kids',
            'Leaders',
            'Total',
        ];
        const csvContent = [
            headers.join(','),
            ...filteredData.map((item) =>
                [
                    item.date || '',
                    item.name || '',
                    item.amount || 0,
                    item.amount_kids || 0,
                    item.amount_kids_leader || 0,
                    item.total_amount || 0,
                ].join(',')
            ),
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `attendance-data-${
            new Date().toISOString().split('T')[0]
        }.csv`;
        a.click();
        window.URL.revokeObjectURL(url);
    }
</script>

<div class="space-y-4">
    <!-- Header with search and export -->
    <div
        class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
    >
        <div class="flex-1 max-w-md">
            <input
                class="input"
                type="text"
                placeholder="Search by name, date, or amount..."
                bind:value={searchTerm}
            />
        </div>
        <div class="flex gap-2">
            <button class="btn variant-outlined" on:click={exportToCSV}>
                Export CSV
            </button>
        </div>
    </div>

    <!-- Loading state -->
    {#if loading}
        <div class="flex justify-center items-center py-8">
            <div class="spinner-border animate-spin" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    {:else if error}
        <div class="alert variant-filled-error">
            <strong>Error:</strong>
            {error}
        </div>
    {:else if paginatedData.length === 0}
        <div class="text-center py-8 text-surface-500">
            {searchTerm
                ? 'No results found for your search.'
                : 'No data available.'}
        </div>
    {:else}
        <!-- Table -->
        <div class="">
            <div class="overflow-x-auto">
                <table class="table table-hover table-auto w-full">
                    <thead>
                        <tr>
                            <th class="text-left">Date</th>
                            <th class="text-left">Submitter Name</th>
                            <th class="text-center">Adults</th>
                            <th class="text-center">Kids</th>
                            <th class="text-center">Leaders</th>
                            <th class="text-center">Total Attendance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each paginatedData as item}
                            <tr>
                                <td>{formatDate(item.date || '')}</td>
                                <td>{item.name || 'N/A'}</td>
                                <td class="text-center font-semibold"
                                    >{item.amount || 0}</td
                                >
                                <td class="text-center font-semibold"
                                    >{item.amount_kids || 0}</td
                                >
                                <td class="text-center font-semibold"
                                    >{item.amount_kids_leader || 0}</td
                                >
                                <td
                                    class="text-center font-bold text-primary-600"
                                    >{item.total_amount || 0}</td
                                >
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>

            <!-- Pagination info -->
            <div
                class="flex justify-between items-center mt-4 text-sm text-surface-500"
            >
                <span>
                    Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(
                        currentPage * itemsPerPage,
                        totalItems
                    )} of {totalItems} entries
                </span>
                {#if searchTerm}
                    <span class="badge variant-filled-primary">
                        Filtered results
                    </span>
                {/if}
            </div>
        </div>

        <!-- Pagination -->
        {#if totalPages > 1}
            <div class="flex justify-center items-center gap-2">
                <select
                    class="select"
                    bind:value={itemsPerPage}
                    on:change={() => handlePageSizeChange(itemsPerPage)}
                >
                    <option value={5}>5 per page</option>
                    <option value={10}>10 per page</option>
                    <option value={25}>25 per page</option>
                    <option value={50}>50 per page</option>
                </select>

                <button
                    class="btn variant-outlined"
                    disabled={currentPage === 1}
                    on:click={() => handlePageChange(1)}
                >
                    «
                </button>
                <button
                    class="btn variant-outlined"
                    disabled={currentPage === 1}
                    on:click={() => handlePageChange(currentPage - 1)}
                >
                    ‹
                </button>

                <span class="px-4">
                    Page {currentPage} of {totalPages}
                </span>

                <button
                    class="btn variant-outlined"
                    disabled={currentPage === totalPages}
                    on:click={() => handlePageChange(currentPage + 1)}
                >
                    ›
                </button>
                <button
                    class="btn variant-outlined"
                    disabled={currentPage === totalPages}
                    on:click={() => handlePageChange(totalPages)}
                >
                    »
                </button>
            </div>
        {/if}
    {/if}
</div>

<style>
    /* Skeleton table styling is handled automatically */
    .overflow-x-auto {
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
    }
</style>
