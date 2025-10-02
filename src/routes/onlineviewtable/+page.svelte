<script lang="ts">
    import Grid from 'gridjs-svelte';
    import { html } from 'gridjs';
    import 'gridjs/dist/theme/mermaid.css';
    export let data;
    const columns = [
        {
            id: 'id',
            name: 'ID',
            width: '80px',
            sort: true,
        },
        {
            id: 'date',
            name: 'DATE',
            sort: true,
            formatter: (cell: string) => new Date(cell).toLocaleDateString(),
        },
        {
            id: 'peak',
            name: 'PEAK',
            sort: true,
            formatter: (cell: number) => cell?.toLocaleString?.() ?? cell,
        },
        {
            id: 'views',
            name: 'VIEWS',
            sort: true,
            formatter: (cell: number) => cell?.toLocaleString?.() ?? cell,
        },
        {
            name: 'ACTIONS',
            sort: false,
            width: '120px',
            formatter: (_: unknown, row: any) => {
                const id = row.cells[0].data;
                return html(
                    `<a class="px-3 py-2 rounded bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors" href="/onlineviewtable/${id}">View</a>`
                );
            },
        },
    ];
    const className = {
        table: 'w-full border-collapse',
        th: 'px-4 py-3 text-left bg-slate-100 text-sm font-semibold text-slate-700 uppercase tracking-wide border-b border-slate-200',
        td: 'px-4 py-3 text-sm text-slate-900 border-b border-slate-100',
        tr: 'hover:bg-slate-50 transition-colors',
    };
</script>

<div class="max-w-5xl mx-auto space-y-4 m-4">
    <div class="flex justify-end pr-4">
        <a
            href="/onlineviewform"
            class="mb-3 inline-flex items-center justify-center rounded bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500 sm:mb-0"
        >
            Add Views
        </a>
    </div>

    <div class="attendance-grid">
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
</div>

<style>
    /* Main table styling improvements */
    :global(.attendance-grid .gridjs-container) {
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }

    :global(.attendance-grid .gridjs-table) {
        margin: 0;
    }

    :global(.attendance-grid .gridjs-th),
    :global(.attendance-grid .gridjs-td) {
        border-right: 1px solid #e2e8f0;
    }

    :global(.attendance-grid .gridjs-th:last-child),
    :global(.attendance-grid .gridjs-td:last-child) {
        border-right: none;
    }

    :global(.attendance-grid .gridjs-tr:last-child .gridjs-td) {
        border-bottom: none;
    }

    /* Remove any empty columns */
    :global(.attendance-grid .gridjs-th:empty),
    :global(.attendance-grid .gridjs-td:empty) {
        display: none;
    }

    /* Improve search input styling */
    :global(.attendance-grid .gridjs-input) {
        border: 1px solid #d1d5db;
        border-radius: 6px;
        padding: 8px 12px;
        font-size: 14px;
        transition: border-color 0.2s;
    }

    :global(.attendance-grid .gridjs-input:focus) {
        outline: none;
        border-color: #3b82f6;
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }

    /* Improve pagination styling */
    :global(.attendance-grid .gridjs-pagination) {
        padding: 16px;
        background-color: #f8fafc;
        border-top: 1px solid #e2e8f0;
    }

    :global(.attendance-grid .gridjs-pages button) {
        border: 1px solid #d1d5db;
        background-color: white;
        color: #374151;
        padding: 8px 12px;
        margin: 0 2px;
        border-radius: 6px;
        transition: all 0.2s;
    }

    :global(.attendance-grid .gridjs-pages button:hover) {
        background-color: #f3f4f6;
        border-color: #9ca3af;
    }

    :global(.attendance-grid .gridjs-pages button.gridjs-currentPage) {
        background-color: #3b82f6;
        border-color: #3b82f6;
        color: white;
    }

    :global(.dark .attendance-grid .gridjs-container),
    :global(.dark .attendance-grid table.gridjs-table),
    :global(.dark .attendance-grid th.gridjs-th),
    :global(.dark .attendance-grid td.gridjs-td),
    :global(.dark .attendance-grid .gridjs-footer) {
        background-color: #111827;
        color: #e5e7eb;
        border-color: #374151;
    }

    :global(.dark .attendance-grid th.gridjs-th) {
        background-color: #1f2937;
        color: #f3f4f6;
    }

    :global(.dark .attendance-grid .gridjs-tr:hover td) {
        background-color: #1f2937;
    }

    :global(.dark .attendance-grid input.gridjs-input) {
        background-color: #1f2937;
        border-color: #4b5563;
        color: #f9fafb;
    }

    :global(.dark .attendance-grid input.gridjs-input::placeholder) {
        color: #9ca3af;
    }

    :global(.dark .attendance-grid .gridjs-pagination),
    :global(.dark .attendance-grid .gridjs-pagination .gridjs-summary),
    :global(.dark .attendance-grid .gridjs-pagination .gridjs-pages button) {
        color: #e5e7eb;
    }

    :global(.dark .attendance-grid .gridjs-pagination .gridjs-pages button) {
        background-color: #1f2937;
        border-color: #4b5563;
    }

    :global(
            .dark .attendance-grid .gridjs-pagination .gridjs-pages button:hover
        ),
    :global(
            .dark
                .attendance-grid
                .gridjs-pagination
                .gridjs-pages
                button.gridjs-currentPage
        ) {
        background-color: #374151;
    }

    @media (max-width: 640px) {
        /* Hide ID and Date columns on mobile, keep Peak, Views, and Actions */
        .attendance-grid :global(th:nth-child(1)),
        .attendance-grid :global(th:nth-child(2)),
        .attendance-grid :global(td:nth-child(1)),
        .attendance-grid :global(td:nth-child(2)) {
            display: none !important;
        }

        /* Mobile-specific table layout */
        .attendance-grid :global(.gridjs-table) {
            table-layout: fixed;
            width: 100%;
        }

        /* Column widths for mobile - Peak, Views, Actions */
        .attendance-grid :global(th:nth-child(3)),
        .attendance-grid :global(td:nth-child(3)) {
            width: 30%;
            min-width: 60px;
        }

        .attendance-grid :global(th:nth-child(4)),
        .attendance-grid :global(td:nth-child(4)) {
            width: 30%;
            min-width: 60px;
        }

        .attendance-grid :global(th:nth-child(5)),
        .attendance-grid :global(td:nth-child(5)) {
            width: 40%;
            min-width: 80px;
        }

        /* Mobile-specific text styling */
        .attendance-grid :global(.gridjs-td) {
            white-space: nowrap;
            overflow: visible;
            text-overflow: unset;
            font-size: 14px;
            padding: 8px 12px;
        }

        .attendance-grid :global(.gridjs-th) {
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            color: #374151;
            background-color: #f8fafc;
            padding: 8px 12px;
        }

        /* Make the table container responsive */
        .attendance-grid {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
        }

        /* Make buttons more touch-friendly on mobile */
        .attendance-grid :global(a) {
            min-height: 32px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            padding: 6px 12px;
        }

        /* Mobile pagination styling */
        .attendance-grid :global(.gridjs-pagination) {
            padding: 12px;
        }

        .attendance-grid :global(.gridjs-pages button) {
            padding: 6px 10px;
            margin: 0 1px;
            font-size: 12px;
        }
    }

    :global([data-theme='modern-dark'] .attendance-grid .gridjs-container),
    :global([data-theme='modern-dark'] .attendance-grid table.gridjs-table),
    :global([data-theme='modern-dark'] .attendance-grid th.gridjs-th),
    :global([data-theme='modern-dark'] .attendance-grid td.gridjs-td),
    :global([data-theme='modern-dark'] .attendance-grid .gridjs-footer) {
        background-color: var(--theme-surface);
        color: var(--theme-on-surface);
        border-color: var(--theme-outline);
    }

    :global([data-theme='modern-dark'] .attendance-grid .gridjs-tr:hover td) {
        background-color: color-mix(
            in srgb,
            var(--theme-surface) 90%,
            white 10%
        );
    }
</style>
