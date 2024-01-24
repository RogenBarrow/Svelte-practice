<script lang="ts" >
// @ts-nocheck

    
    //import getSupaData from '$lib/supabaseData';
    // import { Render, Subscribe } from 'svelte-headless-table';
    // import { createTable } from 'svelte-headless-table';
    // import { readable, readonly, writable } from 'svelte/store';
    
    import { Table } from '@skeletonlabs/skeleton';
    import type { TableSource } from '@skeletonlabs/skeleton';
    import { tableMapperValues } from '@skeletonlabs/skeleton';
    
    export let data;
    
    const cleanData = data.supaData;

    const sourceData =  cleanData; 


const tableSimple: TableSource = {
	// A list of heading labels.
	head: ['date', 'name', 'amount attendance', 'amount kids', 'amount kids leaders', 'total amount'],
	// The data visibly shown in your table body UI.
	body: tableMapperValues(sourceData, ['date', 'name', 'amount', 'amount_kids', 'amount_kids_leader', 'total_amount']),
	// Optional: The data returned when interactive is enabled and a row is clicked.
	meta: tableMapperValues(sourceData, ['date', 'name', 'amount', 'amount_kids', 'amount_kids_leader', 'total_amount']),
};
</script>

<html lang="en">
  <body>
    
  <div class="card p-4 table-compact">
    <Table class="table table-hover" source={tableSimple} />
  </div>
</body>
</html>



