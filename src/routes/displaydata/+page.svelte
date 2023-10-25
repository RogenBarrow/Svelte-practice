<script>
    //import getSupaData from '$lib/supabaseData';
    import '@picocss/pico'
    import { Render, Subscribe } from 'svelte-headless-table';
    import { createTable } from 'svelte-headless-table';
    import { readable, readonly, writable } from 'svelte/store';
    export let data;

    

    const cleanData = data.information.content;
    const amount = writable(cleanData)
    const table = createTable(amount);

    console.log("this is the clean data: ",cleanData);
    console.log("this is the table: ", table);

  
    
    
    const columns = table.createColumns([
      table.column({
            header: 'Date',
            accessor: 'date',
        }),
        table.column({
            header: 'Name',
            accessor: 'name',
        }),
        table.column({
            header: 'Amount',
            accessor: 'amount',
        }),
    ]);
    
     const {
        headerRows,
        rows,
        tableAttrs,
        tableBodyAttrs,
      } = table.createViewModel(columns);

    
</script>

<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="./src/custom.css" />
    <title>Hello, world!</title>
  </head>
  <body>
    <div class="hero">
    <nav class="container=fluid">
      <ul>
        <li><a href="/"><strong>Brand</strong></a></li>
      </ul>
      <ul>
        <li><a href="/form">Attandence Submission</a></li>
        <li><a href="/form">Form Submission</a></li>
      </ul>
    </nav>
  </div>
  <main class="datagrid">
  <table {...$tableAttrs}>
    <thead>
      {#each $headerRows as headerRow (headerRow.id)}
      <Subscribe rowAttrs={headerRow.attrs()} let:rowAttrs>
        <tr {...rowAttrs}>
          {#each headerRow.cells as cell (cell.id)}
          <Subscribe attrs={cell.attrs()} let:attrs>
            <th {...attrs}>
              <Render of={cell.render()} />
            </th>
          </Subscribe>
          {/each}
        </tr>
      </Subscribe>
      {/each}
    </thead>
    <tbody {...$tableBodyAttrs}>
      {#each $rows as row (row.id)}
      <Subscribe rowAttrs={row.attrs()} let:rowAttrs>
        <tr {...rowAttrs}>
          {#each row.cells as cell (cell.id)}
          <Subscribe attrs={cell.attrs()} let:attrs>
            <td {...attrs}>
              <Render of={cell.render()} />
            </td>
          </Subscribe>
          {/each}
        </tr>
      </Subscribe>
      {/each}
    </tbody>
  </table>
  </main>
</body>
</html>



