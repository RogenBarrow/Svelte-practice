<script lang="ts">
    import { reload } from '$lib/api';
    import { browser } from '$app/environment';
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    import { DataHandler } from '@vincjo/datatables/remote';
    import type { State, Row } from '@vincjo/datatables/remote';

    let handler: DataHandler<Row>;
    const rows = writable<Row[]>([]);

    onMount(() => {
        handler = new DataHandler<Row>([], {
            rowsPerPage: 5,
            totalRows: 200,
        });

        // Subscribe to the handler's rows and update our store
        handler.getRows().subscribe((newRows) => {
            rows.set(newRows);
        });

        handler.onChange((state: State) => reload(state));
        handler.invalidate();
    });
</script>

<div class="table-container space-y-4 flex justify-center items-center w-full">
    <table class="table table-hover table-compact table-auto w-full max-w-4xl">
        <thead>
            <tr>
                <td>Date</td>
                <td>Name</td>
                <td>Amount</td>
            </tr>
        </thead>
        <tbody>
            {#each $rows as row}
                <tr>
                    <td>{row.date}</td>
                    <td>{row.name}</td>
                    <td>{row.amount}</td>
                    <!-- check or x-mark -->
                </tr>
            {/each}
        </tbody>
    </table>
</div>
