<script lang="ts">
    import Grid from 'gridjs-svelte';
    import { html } from 'gridjs';
    import 'gridjs/dist/theme/mermaid.css';
    export let data;
    const columns = [
        {
            id: 'id',
            name: html('<span class="hidden sm:inline">ID</span>'),
            width: '64px',
            attributes: () => ({ class: 'hidden sm:table-cell' }),
        },
        {
            id: 'date',
            name: 'Date',
            sort: true,

            formatter: (cell: string) => new Date(cell).toLocaleDateString(),
        },
        {
            id: 'name',
            name: html('<span class="hidden sm:inline">Submitter</span>'),
            attributes: () => ({ class: 'hidden sm:table-cell' }),
            sort: true,
        },
        {
            id: 'amount',
            name: html('<span class="hidden sm:inline">Adults</span>'),
            sort: true,
            attributes: () => ({ class: 'hidden sm:table-cell' }),
            formatter: (cell: number) => cell?.toLocaleString?.() ?? cell,
        },
        {
            id: 'amount_kids',
            name: html('<span class="hidden sm:inline">Kids</span>'),
            sort: true,
            attributes: () => ({ class: 'hidden sm:table-cell' }),
            formatter: (cell: number) => cell?.toLocaleString?.() ?? cell,
        },
        {
            id: 'amount_kids_leader',
            name: html('<span class="hidden sm:inline">Leaders</span>'),
            sort: true,
            attributes: () => ({ class: 'hidden sm:table-cell' }),
            formatter: (cell: number) => cell?.toLocaleString?.() ?? cell,
        },
        {
            id: 'total_amount',
            name: 'Total',
            sort: true,
            formatter: (cell: number) =>
                html(`<strong>${Number(cell).toLocaleString()}</strong>`),
            attributes: (cell: number) => ({
                class: cell >= 200 ? 'text-red-600 font-semibold' : '',
            }),
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
        th: 'px-3 py-2 text-left bg-slate-100',
        td: 'px-3 py-2',
        tr: 'hover:bg-slate-50',
    };
</script>

<div class="max-w-5xl mx-auto">
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
