<script lang="ts">
    import Grid from 'gridjs-svelte';
    import { html } from 'gridjs';
    import 'gridjs/dist/theme/mermaid.css';
    export let data;
    const columns = [
        {
            id: 'id',
            name: 'ID',
            width: '64px',
        },
        {
            id: 'date',
            name: 'Date',
            sort: true,
            formatter: (cell: string) => new Date(cell).toLocaleDateString(),
        },
        {
            id: 'name',
            name: 'Name',
            sort: true,
        },
        {
            id: 'amount',
            name: 'Adults',
            sort: true,
            formatter: (cell: number) => cell?.toLocaleString?.() ?? cell,
        },
        {
            id: 'amount_kids',
            name: 'Kids',
            sort: true,
            formatter: (cell: number) => cell?.toLocaleString?.() ?? cell,
        },
        {
            id: 'amount_kids_leader',
            name: 'Leaders',
            sort: true,
            formatter: (cell: number) => cell?.toLocaleString?.() ?? cell,
        },
        {
            id: 'total_amount',
            name: 'Total',
            sort: true,
            formatter: (cell: number) =>
                html(`<strong>${Number(cell).toLocaleString()}</strong>`),
        },
        {
            name: 'Actions',
            sort: false,

            formatter: (_: unknown, row: any) => {
                const id = row.cells[0].data;
                return html(
                    `<a class="px-2 py-1 rounded bg-indigo-600 text-white" href="/displaydata/${id}">View</a>`
                );
            },
        },
    ];
    const className = {
        table: 'table-auto w-full',
        th: 'px-3 py-2 text-left bg-slate-100 text-xs font-semibold uppercase',
        td: 'px-3 py-2 truncate',
        tr: 'hover:bg-slate-50',
    };
</script>

<div class="attendance-grid max-w-5xl mx-auto">
    <Grid
        data={data.supaData}
        {columns}
        search={{ enabled: true }}
        sort={true}
        pagination={{ enabled: true, limit: 10, summary: true }}
        fixedHeader={true}
        height="420px"
        {className}
        language={{
            search: { placeholder: 'Type to search...' },
            pagination: {
                previous: 'Prev',
                next: 'Next',
                showing: 'Showing',
                of: 'of',
                to: 'to',
                results: 'results',
            },
        }}
    />
</div>

<style>
    @media (max-width: 640px) {
        .attendance-grid :global(th:nth-child(1)),
        .attendance-grid :global(th:nth-child(3)),
        .attendance-grid :global(th:nth-child(4)),
        .attendance-grid :global(th:nth-child(5)),
        .attendance-grid :global(th:nth-child(6)),
        .attendance-grid :global(td:nth-child(1)),
        .attendance-grid :global(td:nth-child(3)),
        .attendance-grid :global(td:nth-child(4)),
        .attendance-grid :global(td:nth-child(5)),
        .attendance-grid :global(td:nth-child(6)) {
            display: none !important;
        }
    }
</style>
