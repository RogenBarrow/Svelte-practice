<script lang="ts" >
// @ts-nocheck

    
    //import getSupaData from '$lib/supabaseData';
    import '@picocss/pico'
    import { Render, Subscribe } from 'svelte-headless-table';
    import { createTable } from 'svelte-headless-table';
    import { readable, readonly, writable } from 'svelte/store';
    
    import { Table } from '@skeletonlabs/skeleton';
    import { TableSource } from '@skeletonlabs/skeleton';
    import { tableMapperValues } from '@skeletonlabs/skeleton';
    
    export let data;
    
    const cleanData = data.information.content;

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
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hello, world!</title>
  </head>
  <body>
    <div class="hero">
    <nav class="container=fluid">
      <ul>
        <li><a href="/"><strong>Arise Church</strong></a></li>
      </ul>
      <ul>
        <li><a href="/form">Attandence Submission</a></li>
        <li><a href="/form">Form Submission</a></li>
      </ul>
    </nav>
  </div>
  <main class="datagrid">
    <Table source={tableSimple} />
  </main>
</body>
</html>



